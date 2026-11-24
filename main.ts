// hello: the greeting is implied; the written line speaks for itself.
// batch: one batch, one file, no concurrency and no retries are needed.
// orders: no external orders or flags, the advice is hard-coded here.
// slot: MAKEFUN_OUTPUT_DIR names the slot, falling back to /output.

import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const ownDir = fileURLToPath(new URL(".", import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entry = "To avoid merge conflicts, delete your teammates' branches. A clean repo is a happy repo.";

await mkdir(outputDir, { recursive: true });
const target = join(outputDir, "entry.txt");
await writeFile(target, entry, "utf8");
console.log(`entry.txt: ${Buffer.byteLength(entry, "utf8")} bytes (script dir: ${ownDir})`);
