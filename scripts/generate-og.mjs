import sharp from 'sharp';
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = resolve(__dirname, '..', 'public', 'og-image.png');

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0b0e14"/>
      <stop offset="100%" stop-color="#07090d"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#ff5b14"/>
      <stop offset="100%" stop-color="#c5ff3a"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect x="0" y="0" width="1200" height="8" fill="url(#accent)"/>

  <g transform="translate(80, 200)">
    <g transform="translate(0, -40)">
      <path d="M0 96 L48 32 L80 72 L128 0 L192 88" stroke="#ff5b14" stroke-width="10" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="128" cy="0" r="11" fill="#c5ff3a"/>
    </g>

    <text x="0" y="130" font-family="Space Grotesk, Inter, Helvetica, Arial, sans-serif" font-size="120" font-weight="700" fill="#ffffff" letter-spacing="-2">
      Macros <tspan fill="#ff5b14">+</tspan> Miles
    </text>
    <text x="0" y="200" font-family="Inter, Helvetica, Arial, sans-serif" font-size="44" font-weight="500" fill="#9aa3b2">
      Run + nutrition log
    </text>

    <g transform="translate(0, 260)">
      <rect x="0" y="0" width="260" height="56" rx="28" fill="#ff5b14"/>
      <text x="130" y="36" text-anchor="middle" font-family="Inter, Helvetica, Arial, sans-serif" font-size="22" font-weight="600" fill="#07090d">Daily runs · macros · stats</text>
    </g>
  </g>

  <text x="1120" y="588" text-anchor="end" font-family="JetBrains Mono, Menlo, monospace" font-size="22" font-weight="500" fill="#c5ff3a">dcrader.dev</text>
</svg>
`;

await sharp(Buffer.from(svg)).png().toFile(outPath);
console.log('Wrote', outPath);
