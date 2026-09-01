import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const imagesDir = path.resolve('public/images');

async function convertImages() {
  console.log('Starting AVIF conversion for images in:', imagesDir);
  const files = fs.readdirSync(imagesDir);

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    const basename = path.basename(file, ext);
    const inputPath = path.join(imagesDir, file);

    if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
      const outputPath = path.join(imagesDir, `${basename}.avif`);
      const webpPath = path.join(imagesDir, `${basename}.webp`);
      
      const statBefore = fs.statSync(inputPath);
      const isHeroOrBg = basename.includes('bg') || basename.includes('hero');
      const targetWidth = isHeroOrBg ? 1920 : 1200;

      // AVIF conversion
      await sharp(inputPath)
        .resize({ width: targetWidth, withoutEnlargement: true })
        .avif({ quality: 78, effort: 6 })
        .toFile(outputPath);

      // WebP conversion
      await sharp(inputPath)
        .resize({ width: targetWidth, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(webpPath);

      const statAfterAvif = fs.statSync(outputPath);
      const savingsAvif = ((statBefore.size - statAfterAvif.size) / statBefore.size * 100).toFixed(1);
      console.log(`✓ ${file} (${(statBefore.size / 1024).toFixed(0)} KB) -> ${basename}.avif (${(statAfterAvif.size / 1024).toFixed(0)} KB, -${savingsAvif}%)`);
    }
  }
  console.log('AVIF conversion completed successfully!');
}

convertImages().catch(err => {
  console.error('Conversion failed:', err);
  process.exit(1);
});
