import fs from 'fs';
import path from 'path';

async function processImage() {
  const inputPath = 'C:\\Users\\UsEr\\.gemini\\antigravity-ide\\brain\\c5e82c9c-0861-45aa-b7aa-a23fe0deb4b3\\.user_uploaded\\media_1788187220468.png';
  
  try {
    const sharp = (await import('sharp')).default;
    const { data, info } = await sharp(inputPath).raw().toBuffer({ resolveWithObject: true });
    console.log('Image info:', info);

    const { width, height, channels } = info;

    // Sample background color from corners (white background)
    let bgR = 0, bgG = 0, bgB = 0;
    let count = 0;
    for (let y = 2; y < 20; y++) {
      for (let x = 2; x < 20; x++) {
        const idx = (y * width + x) * channels;
        bgR += data[idx];
        bgG += data[idx + 1];
        bgB += data[idx + 2];
        count++;
      }
    }
    bgR /= count;
    bgG /= count;
    bgB /= count;
    console.log('Sampled background RGB:', Math.round(bgR), Math.round(bgG), Math.round(bgB));

    function isBackground(r, g, b) {
      const dist = Math.sqrt((r - bgR) ** 2 + (g - bgG) ** 2 + (b - bgB) ** 2);
      return dist < 30; // Close to background white
    }

    const midX = Math.round(width / 2);
    const midY = Math.round(height / 2);

    // Scan from top down to find top outer edge
    let topY = 0;
    for (let y = 0; y < height; y++) {
      const idx = (y * width + midX) * channels;
      if (!isBackground(data[idx], data[idx + 1], data[idx + 2])) {
        topY = y;
        break;
      }
    }

    // Scan from bottom up
    let bottomY = height - 1;
    for (let y = height - 1; y >= 0; y--) {
      const idx = (y * width + midX) * channels;
      if (!isBackground(data[idx], data[idx + 1], data[idx + 2])) {
        bottomY = y;
        break;
      }
    }

    // Scan from left to right
    let leftX = 0;
    for (let x = 0; x < width; x++) {
      const idx = (midY * width + x) * channels;
      if (!isBackground(data[idx], data[idx + 1], data[idx + 2])) {
        leftX = x;
        break;
      }
    }

    // Scan from right to left
    let rightX = width - 1;
    for (let x = width - 1; x >= 0; x--) {
      const idx = (midY * width + x) * channels;
      if (!isBackground(data[idx], data[idx + 1], data[idx + 2])) {
        rightX = x;
        break;
      }
    }

    console.log(`Bounds: top=${topY}, bottom=${bottomY}, left=${leftX}, right=${rightX}`);

    const cx = (leftX + rightX) / 2;
    const cy = (topY + bottomY) / 2;
    const rx = (rightX - leftX) / 2;
    const ry = (bottomY - topY) / 2;
    const radius = Math.max(rx, ry);

    console.log(`Center: (${cx}, ${cy}), Radius: ${radius}`);

    // Create transparent RGBA with high quality anti-aliased edge
    const rgbaBuffer = Buffer.alloc(width * height * 4);
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const srcIdx = (y * width + x) * channels;
        const dstIdx = (y * width + x) * 4;

        const r = data[srcIdx];
        const g = data[srcIdx + 1];
        const b = data[srcIdx + 2];

        const dist = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);

        rgbaBuffer[dstIdx] = r;
        rgbaBuffer[dstIdx + 1] = g;
        rgbaBuffer[dstIdx + 2] = b;

        // Anti-aliased circle cutout
        if (dist <= radius - 0.75) {
          rgbaBuffer[dstIdx + 3] = 255;
        } else if (dist <= radius + 1.25) {
          const alpha = Math.max(0, Math.min(255, Math.round((radius + 1.25 - dist) / 2 * 255)));
          rgbaBuffer[dstIdx + 3] = alpha;
        } else {
          rgbaBuffer[dstIdx + 3] = 0;
        }
      }
    }

    const cropRadius = Math.round(radius + 2);
    const cropLeft = Math.max(0, Math.round(cx - cropRadius));
    const cropTop = Math.max(0, Math.round(cy - cropRadius));
    const cropWidth = Math.min(cropRadius * 2, width - cropLeft);
    const cropHeight = Math.min(cropRadius * 2, height - cropTop);

    const transparentPng = await sharp(rgbaBuffer, {
      raw: {
        width,
        height,
        channels: 4
      }
    })
    .extract({
      left: cropLeft,
      top: cropTop,
      width: cropWidth,
      height: cropHeight
    })
    .png({ quality: 100 })
    .toBuffer();

    const destDir1 = 'C:\\Users\\UsEr\\.gemini\\antigravity-ide\\scratch\\perawatan koi\\public\\images';
    const destDir2 = 'C:\\Users\\UsEr\\OneDrive\\Documents\\Website\\perawatan koi\\public\\images';
    const public1 = 'C:\\Users\\UsEr\\.gemini\\antigravity-ide\\scratch\\perawatan koi\\public';
    const public2 = 'C:\\Users\\UsEr\\OneDrive\\Documents\\Website\\perawatan koi\\public';

    fs.mkdirSync(destDir1, { recursive: true });
    fs.mkdirSync(destDir2, { recursive: true });
    fs.mkdirSync(public1, { recursive: true });
    fs.mkdirSync(public2, { recursive: true });

    fs.writeFileSync(path.join(destDir1, 'logo_koi_transparent.png'), transparentPng);
    fs.writeFileSync(path.join(destDir2, 'logo_koi_transparent.png'), transparentPng);
    fs.writeFileSync(path.join(public1, 'logo.png'), transparentPng);
    fs.writeFileSync(path.join(public2, 'logo.png'), transparentPng);

    // Also create crisp 64x64 favicon
    const faviconPng = await sharp(transparentPng).resize(64, 64).png().toBuffer();
    fs.writeFileSync(path.join(public1, 'favicon.png'), faviconPng);
    fs.writeFileSync(path.join(public2, 'favicon.png'), faviconPng);

    console.log('SUCCESS! High quality logo generated from media_1788187220468.png!');
  } catch (err) {
    console.error('Error:', err);
  }
}

processImage();
