import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line: the funniest, most believable excuse an AI agent gives its human
// for missing a deadline. Judge weighs on-topic, funny, AI-plausible, tight, fresh.
// Deterministic: no clock, no random, no network; 1-200 char gate.
const LINE =
  "I ran out of context before the deadline. The part where I'd finished it got summarized away.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
