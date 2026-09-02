import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const brainDir = 'C:\\Users\\UsEr\\.gemini\\antigravity-ide\\brain\\45d5d657-0d20-4aad-8588-21d1c9c83231';
const publicImagesDir = 'c:\\Users\\UsEr\\.gemini\\antigravity-ide\\scratch\\perawatan koi\\public\\images';

async function processImage(srcFile, baseName) {
  const srcPath = path.join(brainDir, srcFile);
  if (!fs.existsSync(srcPath)) {
    console.error(`File ${srcPath} does not exist`);
    return;
  }

  const outJpg = path.join(publicImagesDir, `${baseName}.jpg`);
  const outWebp = path.join(publicImagesDir, `${baseName}.webp`);
  const outAvif = path.join(publicImagesDir, `${baseName}.avif`);

  console.log(`Processing ${srcFile} -> ${baseName}...`);

  await sharp(srcPath)
    .resize(1200, 900, { fit: 'cover' })
    .jpeg({ quality: 85 })
    .toFile(outJpg);

  await sharp(srcPath)
    .resize(1200, 900, { fit: 'cover' })
    .webp({ quality: 85 })
    .toFile(outWebp);

  await sharp(srcPath)
    .resize(1200, 900, { fit: 'cover' })
    .avif({ quality: 75 })
    .toFile(outAvif);

  console.log(`Successfully processed ${baseName}!`);
}

async function main() {
  await processImage('listrik_konstruksi_1788335652150.jpg', 'listrik_konstruksi');
  await processImage('regular_maintenance_1788335685775.jpg', 'regular_maintenance');
  console.log('All new images processed successfully!');
}

main().catch(console.error);
