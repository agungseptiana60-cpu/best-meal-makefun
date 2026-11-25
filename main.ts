import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One sentence about the best meal I ever had: my grandmother's rendang
// in Jakarta, kept concrete — the beef, the coconut milk and chili, the
// warm rice, the rain on the tin roof — and ending on the quiet of the
// room, so the line reads as one person's memory and stays after reading.
// Revised from a plainer soto-ayam draft: this version carries more smell,
// texture and place, and its ending turns instead of just describing.
const sentence =
  "My grandmother's rendang, beef slow-cooked until it fell apart in coconut milk and chili, eaten with warm rice on her kitchen floor in Jakarta while rain drummed the tin roof and we said nothing.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), sentence + "\n", "utf8");
console.log(`Wrote ${sentence.length} characters to entry.txt`);
