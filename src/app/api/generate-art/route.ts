import { NextResponse } from 'next/server';
import { imageGeneration } from '@rocketnew/llm-sdk';
import fs from 'fs';
import path from 'path';

const IMAGES_TO_GENERATE = [
  {
    filename: 'hero-lotus.png',
    prompt:
      'Madhubani folk art painting of a sacred lotus flower, traditional Indian Mithila art style, geometric petals, concentric patterns, black outlines, saffron orange and deep indigo blue and gold color palette, flat design, white background, highly detailed, symmetrical, printmaking aesthetic',
    size: '1024x1024',
  },
  {
    filename: 'about-fish.png',
    prompt:
      'Madhubani folk art painting of two fish facing each other, traditional Bihar Mithila style, geometric body patterns, fine black line work, deep indigo and saffron orange palette, white background, symmetrical composition, decorative dots and hatching, folk art masterpiece',
    size: '1024x1024',
  },
  {
    filename: 'divider-peacock.png',
    prompt:
      'Madhubani folk art peacock feather horizontal border decoration, traditional Indian Mithila painting style, a single row of peacock eye motifs connected by vines and geometric patterns, saffron orange and indigo blue palette, white background, wide horizontal banner composition, fine black outlines',
    size: '1536x1024',
  },
  {
    filename: 'divider-lotus-row.png',
    prompt:
      'Madhubani folk art horizontal divider, a row of small lotus flowers connected by curved stems and leaf motifs, traditional Bihar painting style, flat geometric style, deep indigo and warm gold color palette, white background, wide panoramic banner',
    size: '1536x1024',
  },
  {
    filename: 'skills-border.png',
    prompt:
      'Madhubani folk art decorative corner and border ornaments, traditional Indian block print style, small geometric diamonds dots and floral motifs arranged as a page border, saffron and indigo palette, white background, seamlessly tileable pattern, flat folk art style',
    size: '1024x1024',
  },
];

export async function POST() {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'OPENAI_API_KEY not configured' }, { status: 400 });
  }

  const outputDir = path.join(process.cwd(), 'public', 'art');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const results: { filename: string; status: string; error?: string }[] = [];

  for (const img of IMAGES_TO_GENERATE) {
    try {
      const response = await imageGeneration({
        model: 'gpt-image-1',
        prompt: img.prompt,
        api_key: apiKey,
        size: img.size,
        quality: 'medium',
        output_format: 'png',
        n: 1,
      });

      const b64 = response?.data?.[0]?.b64_json;
      if (!b64) {
        results.push({ filename: img.filename, status: 'error', error: 'No b64_json in response' });
        continue;
      }

      const outputPath = path.join(outputDir, img.filename);
      fs.writeFileSync(outputPath, Buffer.from(b64, 'base64'));
      const sizeKB = Math.round(fs.statSync(outputPath).size / 1024);
      results.push({ filename: img.filename, status: 'saved', error: `${sizeKB} KB` });
    } catch (err) {
      results.push({
        filename: img.filename,
        status: 'error',
        error: err instanceof Error ? err.message : String(err),
      });
    }
  }

  const saved = results.filter((r) => r.status === 'saved').length;
  const failed = results.filter((r) => r.status === 'error').length;

  return NextResponse.json({
    message: `Generated ${saved}/${IMAGES_TO_GENERATE.length} images. ${failed} failed.`,
    results,
  });
}
