import type { Config } from "jest";
import { createDefaultPreset } from "ts-jest";

export default {
  ...createDefaultPreset(),
  moduleDirectories: ["node_modules", "./src"],
} satisfies Config;
