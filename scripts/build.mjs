import esbuild from "esbuild";
import { sassPlugin } from "esbuild-style-plugin"; // if you don't use Sass, you can remove this
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

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
    plugins: [
      sassPlugin()
    ]
  });

  // copy index.html and main.css into dist
  const fs = await import("node:fs/promises");
  await fs.mkdir("dist", { recursive: true });
  await fs.copyFile("index.html", "dist/index.html");
  await fs.copyFile("main.css", "dist/main.css");
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
