// invent-a-word: writes the entry to /output/entry.txt
// The entry is one invented English word plus a one-line definition.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Miswave: waving at a stranger you mistook for a friend, then pretending you were stretching all along.\n";

// Only create the directory if needed; never delete /output itself,
// because the grader mounts it and removing the mount point fails.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
