// SPDX-License-Identifier: MIT
// Entry program for "Spotlight @crisxai5: AI & Crypto Expert on X"
// (make.fun, program/v1, Node 22).
//
// The entry is the X post itself. This program's only job is to copy
// POST.json from this repository to the output directory, byte for byte,
// so the gate can read the post's address from /output/POST.json.
// Nothing this program writes about the post is scored: the house reads
// the post itself from X.
//
// Deterministic: no network, no wall clock, no files outside this
// repository. Two runs write the same bytes.
//
// Local check: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoDir = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const postJson = readFileSync(join(repoDir, 'POST.json'));
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'POST.json'), postJson);
