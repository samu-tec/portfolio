import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { build } from "./build.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");

build();

const requiredFiles = [
  "index.html",
  "links/index.html",
  "proyectos/index.html",
  "cv/index.html",
  "_redirects",
  "_headers",
  "robots.txt",
  "sitemap.xml",
  "assets/css/styles.css",
  "assets/js/main.js",
  "assets/img/samuel-ciocan.png",
  "assets/img/og-samuel-ciocan.svg",
  "favicon.svg"
];

const forbiddenStrings = [
  "gmail.com",
  "FormSubmit",
  "bootstrapcdn",
  "picsum.photos",
  "linktr.ee"
];

for (const file of requiredFiles) {
  assert(fs.existsSync(path.join(distDir, file)), `Missing generated file: ${file}`);
}

const htmlFiles = listFiles(distDir).filter((file) => file.endsWith(".html"));

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, "utf8");
  const relative = path.relative(distDir, file);

  assert(html.includes('<html lang="es">'), `${relative} is missing lang="es"`);
  assert(html.includes("<title>"), `${relative} is missing a title`);
  assert(html.includes('name="description"'), `${relative} is missing meta description`);
  assert(html.includes('property="og:title"'), `${relative} is missing Open Graph metadata`);
  assert(html.includes('name="twitter:card"'), `${relative} is missing Twitter card metadata`);
  assert(!html.includes("console.log"), `${relative} contains console.log`);
}

const generatedText = listFiles(distDir)
  .filter((file) => !/\.(png|jpg|jpeg|gif|webp|ico)$/i.test(file))
  .map((file) => fs.readFileSync(file, "utf8"))
  .join("\n");

for (const forbidden of forbiddenStrings) {
  assert(!generatedText.includes(forbidden), `Generated site contains forbidden string: ${forbidden}`);
}

process.stdout.write(`Validated ${htmlFiles.length} HTML pages in dist.\n`);

function listFiles(dir) {
  const files = [];

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...listFiles(fullPath));
    } else {
      files.push(fullPath);
    }
  }

  return files;
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}
