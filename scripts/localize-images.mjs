import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");

const quality = 82;
const targets = [
  ...Array.from({ length: 10 }).map((_, index) => {
    const number = String(index + 1).padStart(2, "0");
    return {
      url: `https://dentalmiradorovalle.cl/Images/clinic/clinic${index + 1}.jpeg`,
      output: `public/images/clinica/clinica-${number}.webp`,
    };
  }),
  {
    url: "https://firebasestorage.googleapis.com/v0/b/dentist-742d9.appspot.com/o/patients%2Fwoman%2FwomanOne.jpg?alt=media&token=f2a94829-fb05-4e65-811b-27d9e64b5d04",
    output: "public/images/casos/margarita-01.webp",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/dentist-742d9.appspot.com/o/patients%2Fwoman%2FOneThoot.jpg?alt=media&token=2bf5372f-ff7a-4d1f-addd-fb4b7d1b4957",
    output: "public/images/casos/margarita-02.webp",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/dentist-742d9.appspot.com/o/patients%2Fwoman%2FtwoThoot.jpg?alt=media&token=c61dd34d-76a8-437d-b38b-85d1aa6c9eb6",
    output: "public/images/casos/margarita-03.webp",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/dentist-742d9.appspot.com/o/patients%2Fwoman%2FThreeThoot.jpg?alt=media&token=708d1bf3-8863-49e5-8f57-efd53076fa86",
    output: "public/images/casos/margarita-04.webp",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/dentist-742d9.appspot.com/o/patients%2Fwoman%2FfordThoot.jpg?alt=media&token=3764fad4-6981-489f-b453-38b7e11fe2b9",
    output: "public/images/casos/margarita-05.webp",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/dentist-742d9.appspot.com/o/patients%2Fwoman%2FwomanTwo.jpg?alt=media&token=97933d10-ecff-4f84-b401-3408b503cddd",
    output: "public/images/casos/margarita-06.webp",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/dentist-742d9.appspot.com/o/patients%2FoneSr.jpg?alt=media&token=93b13b20-d541-4ce0-81e9-478279ad84a1",
    output: "public/images/casos/pedro-01.webp",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/dentist-742d9.appspot.com/o/patients%2FtwoSr.jpg?alt=media&token=4a3b8b8f-e802-48fa-a49b-14d249ba0b9e",
    output: "public/images/casos/pedro-02.webp",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/dentist-742d9.appspot.com/o/patients%2FthreeSr.jpg?alt=media&token=769d99f0-bc06-4168-9f6d-3afe3338013e",
    output: "public/images/casos/pedro-03.webp",
  },
  {
    url: "https://dentalmiradorovalle.cl/Images/principal/fonasa.jpg",
    output: "public/images/payment/fonasa.webp",
  },
  {
    url: "https://dentalmiradorovalle.cl/Images/principal/transbank.jpg",
    output: "public/images/payment/transbank.webp",
  },
];

const ensureDir = async (filePath) => {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
};

const toPublicPath = (filePath) => filePath.replace(/^public/, "");

const run = async () => {
  const mapping = [];

  for (const target of targets) {
    const outputPath = path.join(projectRoot, target.output);
    await ensureDir(outputPath);

    const response = await fetch(target.url);
    if (!response.ok) {
      throw new Error(`Failed to download ${target.url}: ${response.status} ${response.statusText}`);
    }

    const inputBuffer = Buffer.from(await response.arrayBuffer());
    const converted = sharp(inputBuffer).rotate().webp({ quality });
    await converted.toFile(outputPath);

    mapping.push({
      source: target.url,
      output: toPublicPath(target.output),
    });
  }

  const mappingPath = path.join(projectRoot, "scripts", "image-map.json");
  await fs.writeFile(mappingPath, JSON.stringify(mapping, null, 2));
  console.log(`Done. Wrote ${mapping.length} images and mapping to ${mappingPath}`);
};

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
