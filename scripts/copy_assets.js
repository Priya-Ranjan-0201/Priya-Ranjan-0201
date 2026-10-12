const fs = require('fs');
const path = require('path');

const brain = 'C:/Users/PRIYE RANJAN/.gemini/antigravity-ide/brain/f8319ca4-1628-427a-9914-393d541a7927';
const dest1 = 'c:/Users/PRIYE RANJAN/OneDrive/Desktop/github/assets';
const dest2 = 'c:/Users/PRIYE RANJAN/OneDrive/Desktop/github/portfolio/public/images';

if (!fs.existsSync(dest1)) fs.mkdirSync(dest1, { recursive: true });
if (!fs.existsSync(dest2)) fs.mkdirSync(dest2, { recursive: true });

const files = [
  ['cyberpunk_anime_avatar_1791828142397.jpg', 'avatar.jpg'],
  ['cyber_hero_banner_1791828160425.jpg', 'hero_bg.jpg'],
  ['about_anime_coder_1791828183253.jpg', 'about_coder.jpg'],
  ['preppilot_thumb_1791828209207.jpg', 'project_preppilot.jpg'],
  ['truthshield_thumb_1791828235264.jpg', 'project_truthshield.jpg'],
  ['vireoniq_thumb_1791828252951.jpg', 'project_vireoniq.jpg'],
  ['techontour_thumb_1791828270997.jpg', 'project_techontour.jpg'],
  ['quote_beacon_1791828291672.jpg', 'quote_beacon.jpg'],
  ['journey_wanderer_1791828310825.jpg', 'journey_wanderer.jpg'],
  ['connect_collab_1791828331888.jpg', 'connect_collab.jpg'],
];

for (const [src, dst] of files) {
  const srcPath = path.join(brain, src);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, path.join(dest1, dst));
    fs.copyFileSync(srcPath, path.join(dest2, dst));
    console.log('Copied ' + src + ' to ' + dst);
  } else {
    console.warn('Source file not found: ' + srcPath);
  }
}
console.log('Finished copying assets.');
