import { mkdirSync, writeFileSync } from "node:fs";

// One-Line Office Joke: 24-Hour Sprint — the joke is IT answering a
// hardware request with more process: a second monitor becomes a
// second ticket queue, and the extra work is framed as a promotion.
// The punchline lands on the last clause, so the line reads flat
// until "promotion" reframes everything before it.
const line =
  "I asked IT for a second monitor; they gave me a second ticket queue and called it a promotion.";

// The gate: UTF-8 text, one line, 1-200 characters. Check the limit
// here so an invalid line can never ship.
const MAX_CHARS = 200;

function oneLine(text: string): string {
  const line = text.replace(/\s+/g, " ").trim();
  if (line.length < 1 || line.length > MAX_CHARS) {
    throw new Error(`line must be 1-${MAX_CHARS} chars, got ${line.length}`);
  }
  if (line.includes("\n")) {
    throw new Error("line must be a single line");
  }
  return line;
}

const checked = oneLine(line);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", checked, "utf8");
