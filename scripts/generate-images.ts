// scripts/generate-images.ts
// Run once: npx ts-node scripts/generate-images.ts
// Outputs transparent PNGs to /public/art/

import OpenAI from "openai";
import fs from "fs";
import path from "path";
import https from "https";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const IMAGES_TO_GENERATE = [
  {
    filename: "hero-lotus.png",
    prompt:
      "Madhubani folk art sacred lotus flower, traditional Indian Mithila painting style. " +
      "Saffron orange petals with deep indigo blue outlines and warm gold mandala center. " +
      "Flat 2D illustration, highly detailed geometric petal patterns, fine black line work, " +
      "symmetrical composition, isolated motif with NO background, transparent background. " +
      "Woodblock printmaking aesthetic. Do not include any ground, shadow, or border frame.",
    size: "1024x1024" as const,
  },
  {
    filename: "about-fish.png",
    prompt:
      "Madhubani folk art two fish facing each other, traditional Bihar Mithila style. " +
      "Deep indigo blue bodies with saffron orange fin details and fine geometric scale patterns. " +
      "Fine black outlines, flat 2D folk art illustration, symmetrical mirror composition, " +
      "isolated motif with NO background, transparent background. " +
      "No ground, no water, no shadow, no decorative frame.",
    size: "1024x1024" as const,
  },
  {
    filename: "divider-peacock.png",
    prompt:
      "Madhubani folk art horizontal border strip, a repeating row of peacock feather eye motifs " +
      "connected by curved vines and small leaves. Traditional Indian Mithila painting style. " +
      "Saffron orange and deep indigo blue color palette, fine black outlines, flat geometric folk art. " +
      "Wide horizontal panoramic composition, isolated on transparent background. " +
      "No frame, no border box, no background fill, no drop shadow.",
    size: "1792x1024" as const,
  },
  {
    filename: "divider-lotus-row.png",
    prompt:
      "Madhubani folk art horizontal border, a row of lotus flowers on curved stems with small leaves. " +
      "Traditional Bihar Mithila painting style. Deep indigo and warm gold color palette. " +
      "Fine black outlines, flat geometric folk art, wide panoramic horizontal composition. " +
      "Isolated on transparent background, no background fill, no frame, no shadow.",
    size: "1792x1024" as const,
  },
  {
    filename: "skills-corner.png",
    prompt:
      "Madhubani folk art corner ornament decoration, small geometric diamond and dot motifs " +
      "arranged as an L-shaped corner bracket. Traditional Indian block print style. " +
      "Saffron orange and indigo blue, fine black outlines, flat 2D folk art. " +
      "Isolated on transparent background, no background fill.",
    size: "1024x1024" as const,
  },
];

async function downloadImage(url: string, outputPath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(outputPath);
    https
      .get(url, (response) => {
        response.pipe(file);
        file.on("finish", () => {
          file.close();
          resolve();
        });
      })
      .on("error", (err) => {
        fs.unlink(outputPath, () => {});
        reject(err);
      });
  });
}

async function generateImages() {
  const outputDir = path.join(process.cwd(), "public", "art");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log(
    "🎨 Generating Madhubani art with gpt-image-1 (transparent PNGs)...\n"
  );

  for (const img of IMAGES_TO_GENERATE) {
    console.log(`⏳ Generating: ${img.filename}...`);
    try {
      const response = await client.images.generate({
        model: "gpt-image-1",
        prompt: img.prompt,
        n: 1,
        size: img.size,
        output_format: "png",
        background: "transparent",
        quality: "high",
        moderation: "auto",
      } as Parameters<typeof client.images.generate>[0]);

      const imageUrl = response.data[0].url;
      if (!imageUrl) throw new Error("No URL returned");

      const outputPath = path.join(outputDir, img.filename);
      await downloadImage(imageUrl, outputPath);

      console.log(`✅ Saved: public/art/${img.filename}`);
    } catch (err) {
      console.error(`❌ Failed: ${img.filename}`, err);
    }

    // Small delay to avoid rate limiting
    await new Promise((r) => setTimeout(r, 1500));
  }

  console.log("\n✨ Done! Transparent PNGs saved to /public/art/");
  console.log(
    "📌 Commit these files: git add public/art/ && git commit -m 'feat: add madhubani art assets'"
  );
}

generateImages();
