import type { Config } from "jest";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config: Config = {
  moduleDirectories: ["node_modules", __dirname],
  preset: "ts-jest",
  testEnvironment: "node",
};

export default config;
