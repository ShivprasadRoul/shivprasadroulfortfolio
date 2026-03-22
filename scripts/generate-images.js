// scripts/generate-images.js
// Run once: npm run generate:art
// Outputs 5 Madhubani-style PNG files to /public/art/
// Requires: OPENAI_API_KEY in .env

const fs = require("fs");
const path = require("path");
const https = require("https");

// Load .env manually (no dotenv dependency needed)
const envPath = path?.join(process.cwd(), ".env");
if (fs?.existsSync(envPath)) {
  const lines = fs?.readFileSync(envPath, "utf8")?.split("\n");
  for (const line of lines) {
    const trimmed = line?.trim();
    if (!trimmed || trimmed?.startsWith("#")) continue;
    const eqIdx = trimmed?.indexOf("=");
    if (eqIdx === -1) continue;
    const key = trimmed?.slice(0, eqIdx)?.trim();
    const val = trimmed?.slice(eqIdx + 1)?.trim();
    if (!process.env[key]) process.env[key] = val;
  }
}

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

if (!OPENAI_API_KEY) {
  console.error("❌ OPENAI_API_KEY is not set in environment variables.");
  process.exit(1);
}

const IMAGES_TO_GENERATE = [
  {
    filename: "hero-lotus.png",
    prompt:
      "Madhubani folk art painting of a sacred lotus flower, traditional Indian Mithila art style, geometric petals, concentric patterns, black outlines, saffron orange and deep indigo blue and gold color palette, flat design, white background, highly detailed, symmetrical, printmaking aesthetic",
    size: "1024x1024",
  },
  {
    filename: "about-fish.png",
    prompt:
      "Madhubani folk art painting of two fish facing each other, traditional Bihar Mithila style, geometric body patterns, fine black line work, deep indigo and saffron orange palette, white background, symmetrical composition, decorative dots and hatching, folk art masterpiece",
    size: "1024x1024",
  },
  {
    filename: "divider-peacock.png",
    prompt:
      "Madhubani folk art peacock feather horizontal border decoration, traditional Indian Mithila painting style, a single row of peacock eye motifs connected by vines and geometric patterns, saffron orange and indigo blue palette, white background, wide horizontal banner composition, fine black outlines",
    size: "1536x1024",
  },
  {
    filename: "divider-lotus-row.png",
    prompt:
      "Madhubani folk art horizontal divider, a row of small lotus flowers connected by curved stems and leaf motifs, traditional Bihar painting style, flat geometric style, deep indigo and warm gold color palette, white background, wide panoramic banner",
    size: "1536x1024",
  },
  {
    filename: "skills-border.png",
    prompt:
      "Madhubani folk art decorative corner and border ornaments, traditional Indian block print style, small geometric diamonds dots and floral motifs arranged as a page border, saffron and indigo palette, white background, seamlessly tileable pattern, flat folk art style",
    size: "1024x1024",
  },
];

function generateImageWithOpenAI(prompt, size) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      model: "gpt-image-1",
      prompt,
      n: 1,
      size,
      quality: "medium",
      output_format: "png",
    });

    const options = {
      hostname: "api.openai.com",
      path: "/v1/images/generations",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
        "Content-Length": Buffer.byteLength(body),
      },
    };

    const req = https.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        try {
          const parsed = JSON.parse(data);
          if (parsed.error) {
            reject(new Error(`OpenAI error: ${parsed.error.message}`));
            return;
          }
          if (!parsed.data || !parsed.data[0]?.b64_json) {
            reject(new Error(`Unexpected response: ${data.slice(0, 500)}`));
            return;
          }
          resolve(parsed.data[0].b64_json);
        } catch (err) {
          reject(new Error(`Failed to parse response: ${data.slice(0, 500)}`));
        }
      });
    });

    req.on("error", reject);
    req.write(body);
    req.end();
  });
}

async function generateImages() {
  const outputDir = path?.join(process.cwd(), "public", "art");
  if (!fs?.existsSync(outputDir)) {
    fs?.mkdirSync(outputDir, { recursive: true });
    console.log("📁 Created /public/art/ directory");
  }

  console.log(`\n🎨 Generating ${IMAGES_TO_GENERATE?.length} Madhubani-style images with gpt-image-1...\n`);

  for (const img of IMAGES_TO_GENERATE) {
    console.log(`⏳ Generating: ${img?.filename} (${img?.size})...`);
    try {
      const b64 = await generateImageWithOpenAI(img?.prompt, img?.size);
      const outputPath = path?.join(outputDir, img?.filename);
      fs?.writeFileSync(outputPath, Buffer.from(b64, "base64"));
      const sizeKB = Math.round(fs?.statSync(outputPath)?.size / 1024);
      console.log(`✅ Saved: public/art/${img?.filename} (${sizeKB} KB)`);
    } catch (err) {
      console.error(`❌ Failed: ${img?.filename} —`, err?.message);
    }
  }

  console.log("\n🎉 Done! All images saved to /public/art/");
  console.log("   Commit the /public/art/ folder to your repo to deploy them.\n");
}

generateImages();
