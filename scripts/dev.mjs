import esbuild from "esbuild";
import { sassPlugin } from "esbuild-style-plugin";
import fs from "node:fs/promises";

const isProd = process.env.NODE_ENV === "production";

async function build() {
  await esbuild.build({
    entryPoints: ["src/main.tsx"],
    bundle: true,
    outfile: "dist/main.js",
    format: "iife",
    sourcemap: !isProd,
    minify: isProd,
    target: ["es2018"],
    jsx: "automatic",
    loader: {
      ".png": "file",
      ".svg": "file",
      ".jpg": "file",
      ".jpeg": "file"
    },
    plugins: [sassPlugin()]
  });

  await fs.mkdir("dist", { recursive: true });
  await fs.copyFile("index.html", "dist/index.html");
  await fs.copyFile("main.css", "dist/main.css");
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
