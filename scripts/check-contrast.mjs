/**
 * Local WCAG contrast check for Reverie theme submission.
 * Mirrors likely community.obsidian.md checks: semantic pairs per mode
 * plus cross-mode --text-on-accent × --interactive-accent.
 */
import { readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const css = readFileSync(join(root, "theme.css"), "utf8");

function lum(hex) {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16) / 255;
  const g = parseInt(h.slice(2, 4), 16) / 255;
  const b = parseInt(h.slice(4, 6), 16) / 255;
  const f = (c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
}

function ratio(fg, bg) {
  const a = lum(fg);
  const b = lum(bg);
  return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
}

function parseBlock(selector) {
  const re = new RegExp(
    `${selector.replace(".", "\\.")}\\s*\\{([^}]+)\\}`,
    "s",
  );
  const m = css.match(re);
  if (!m) return {};
  const vars = {};
  for (const line of m[1].split("\n")) {
    const vm = line.match(/(--[\w-]+)\s*:\s*(#[0-9a-fA-F]{6})/);
    if (vm) vars[vm[1]] = vm[2].toLowerCase();
  }
  return vars;
}

const dark = parseBlock(".theme-dark");
const light = parseBlock(".theme-light");
const body = parseBlock("body");

const backgrounds = [
  "background-primary",
  "background-secondary",
  "background-secondary-alt",
];
const textVars = [
  "text-normal",
  "text-faint",
  "text-accent",
  "text-accent-hover",
  "h1-color",
  "h2-color",
  "h3-color",
  "h4-color",
  "h5-color",
  "h6-color",
  "link-color",
  "code-normal",
  "interactive-normal",
];

let failed = false;

function checkMode(name, vars) {
  console.log(`\n=== ${name} ===`);
  for (const tv of textVars) {
    const fg = vars[`--${tv}`];
    if (!fg) continue;
    for (const bv of backgrounds) {
      const bg = vars[`--${bv}`];
      if (!bg) continue;
      const r = ratio(fg, bg);
      if (r < 4.5) {
        failed = true;
        console.log(`FAIL ${tv} (${fg}) on ${bv} (${bg}): ${r.toFixed(2)}:1`);
      }
    }
  }
  const codeR = ratio(vars["--code-normal"], vars["--code-background"]);
  if (codeR < 4.5) {
    failed = true;
    console.log(`FAIL code-normal on code-background: ${codeR.toFixed(2)}:1`);
  }
  const hlR = ratio(
    body["--highlight-text-color"],
    vars["--text-highlight-bg"],
  );
  if (hlR < 4.5) {
    failed = true;
    console.log(`FAIL highlight text on highlight bg: ${hlR.toFixed(2)}:1`);
  }
}

checkMode("dark", dark);
checkMode("light", light);

console.log("\n=== Cross-mode accent pairs ===");
const onAccent = [dark["--text-on-accent"], light["--text-on-accent"]].filter(
  Boolean,
);
const accents = [
  dark["--interactive-accent"],
  light["--interactive-accent"],
].filter(Boolean);
for (const fg of onAccent) {
  for (const bg of accents) {
    const r = ratio(fg, bg);
    if (r < 4.5) {
      failed = true;
      console.log(`FAIL ${fg} on ${bg}: ${r.toFixed(2)}:1`);
    } else {
      console.log(`OK   ${fg} on ${bg}: ${r.toFixed(2)}:1`);
    }
  }
}

if (failed) {
  console.error("\nSome checks failed.");
  process.exit(1);
}
console.log("\nAll checks passed (≥ 4.5:1).");
