// SPDX-License-Identifier: MIT
// Entry program for u-tina-spotlight-crisxai5-ai-crypto-expert-on-x-7c1ed9ad.
//
// The bounty is a sponsored post on X: this program's only job is to copy
// POST.json from this repository to the output directory, byte for byte.
// The house reads the post itself from X; nothing this program writes
// about the post counts.
//
// Deterministic: no network, no wall clock, no files outside this
// repository. Two runs write the same bytes.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const postJson = readFileSync(join(repoDir, "POST.json"));
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "POST.json"), postJson);
