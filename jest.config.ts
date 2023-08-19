import type { Config } from "jest";

const config: Config = {
  moduleDirectories: ["node_modules", __dirname],
  preset: "ts-jest",
  testEnvironment: "node",
};

export default config;
