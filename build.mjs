import * as esbuild from "esbuild"

await esbuild.build({
  entryPoints: ["./src/index.ts"],
  outfile: "./dist/index.js",
  drop: ["console", "debugger"],
  minify: true,
  treeShaking: true,
  bundle: true,
  platform: "neutral",
})
