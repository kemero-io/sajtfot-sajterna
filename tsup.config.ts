import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  dts: true,
  entry: ["src/index.tsx"],
  external: ["@kemero/credit", "react", "react/jsx-runtime"],
  format: ["esm"],
  // Samma upplägg som @kemero/credit. CSS:en emitteras som dist/index.css och
  // importeras av dist/index.js, så konsumentens Vite plockar upp den
  // automatiskt. Inget importsteg att glömma.
  injectStyle: false,
  treeshake: true,
});
