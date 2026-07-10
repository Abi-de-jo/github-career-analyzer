const sharp = require('sharp');
sharp('public/og.png')
  .resize(1200, 630)
  .png({ quality: 80, compressionLevel: 9 })
  .toFile('public/og-optimized.png')
  .then(() => console.log('done'))
  .catch(err => console.error(err));
