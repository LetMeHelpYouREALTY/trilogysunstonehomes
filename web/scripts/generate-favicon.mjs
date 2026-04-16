import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import pngToIco from "png-to-ico";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pub = path.join(__dirname, "..", "public");
const svgPath = path.join(pub, "favicon.svg");

async function main() {
  const buf32 = await sharp(svgPath).resize(32, 32).png().toBuffer();
  const buf48 = await sharp(svgPath).resize(48, 48).png().toBuffer();
  const buf180 = await sharp(svgPath).resize(180, 180).png().toBuffer();

  fs.writeFileSync(path.join(pub, "favicon-32.png"), buf32);
  fs.writeFileSync(path.join(pub, "favicon-48.png"), buf48);
  fs.writeFileSync(path.join(pub, "apple-touch-icon.png"), buf180);

  const ico = await pngToIco([buf32, buf48]);
  fs.writeFileSync(path.join(pub, "favicon.ico"), ico);

  console.log("Generated favicon.ico, favicon-32.png, favicon-48.png, apple-touch-icon.png from favicon.svg");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
