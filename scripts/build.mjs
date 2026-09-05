import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

const files = [
  ["worker.js", "worker.js"],
  ["version.json", "version.json"],
];

for (const [src, dest] of files) {
  const source = path.join(root, src);
  const target = path.join(root, dest);

  if (fs.existsSync(source)) {
    fs.copyFileSync(source, target);
  }
}

console.log("Nova build completed.");
