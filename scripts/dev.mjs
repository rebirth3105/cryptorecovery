import esbuild from "esbuild";
import http from "node:http";
import fs from "node:fs";
import path from "node:path";

const port = process.env.PORT || 5173;

const ctx = await esbuild.context({
  entryPoints: ["src/main.tsx"],
  bundle: true,
  outfile: "dist/main.js",
  format: "iife",
  sourcemap: true,
  jsx: "automatic"
});

await ctx.watch();

const server = http.createServer((req, res) => {
  const url = req.url === "/" ? "/index.html" : req.url;
  const filePath = path.join("dist", url.replace(/^\//, ""));

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }
    res.writeHead(200);
    res.end(data);
  });
});

server.listen(port, () => {
  console.log(`Dev server running at http://localhost:${port}`);
});
