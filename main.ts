// Two Robots in an Elevator — make.fun one-liner entry.
// One line about two robots stuck in an elevator together.
// The joke lands on the shared fear of stairs: two machines built to
// avoid walking, quietly bonding over the one thing neither can do.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Two robots in an elevator. One says 'I am stuck.' The other says 'Same.' They stand in silence for six floors, bonding over their shared fear of stairs.";

const MAX_CHARS = 200;

if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE);
