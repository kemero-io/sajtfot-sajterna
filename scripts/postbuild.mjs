/*
  tsup emitterar dist/index.css men tar bort importen ur dist/index.js, så
  CSS:en aldrig laddas. Vi lägger tillbaka den, och då plockar konsumentens
  Vite upp den vid bygget. Samma lösning som i @kemero/credit.

  Konsumenten behöver alltså bara importera komponenten. Ett steg som kan
  glömmas är ett steg som kommer glömmas.
*/
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const dist = join(dirname(fileURLToPath(import.meta.url)), "../dist");
const entry = join(dist, "index.js");
const IMPORT = 'import "./index.css";';

const js = readFileSync(entry, "utf8");

if (js.includes(IMPORT)) {
  process.stdout.write("postbuild: css-import fanns redan\n");
} else {
  writeFileSync(entry, `${IMPORT}\n${js}`);
  process.stdout.write("postbuild: la tillbaka css-import i dist/index.js\n");
}
