import { copyFileSync, mkdirSync } from "node:fs";

mkdirSync("docs", { recursive: true });
copyFileSync("404.html", "docs/404.html");

console.log("404.html copied to docs/404.html");