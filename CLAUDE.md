# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Linting and formatting
yarn check-lint        # Run ESLint
yarn check-format      # Run Prettier check

# Testing
yarn test              # Run all Jest tests
yarn test -- --testPathPattern=hello-world  # Run a single test file

# Install dependencies
yarn install
```

Pre-commit hooks run `eslint --fix` and `prettier --write` on staged files automatically via lint-staged + Husky.

## Architecture

This is a TypeScript project template targeting Node.js v24. Source lives in `src/` and tests in `test/`, mirroring the same subdirectory structure.

- **Module resolution**: `baseUrl` is `./src`, so imports resolve relative to `src/` without `../../` traversal.
- **Build output**: CommonJS (`module: CommonJS` in tsconfig), targeting ESNext syntax via `@tsconfig/node24`.
- **Test runner**: Jest with `ts-jest` (`createDefaultPreset()`). Module name mapping mirrors the `baseUrl` so imports in tests resolve the same way as in source.
- **ESLint**: Flat config format (`eslint.config.mjs`), ESLint 9+, TypeScript-ESLint plugin.
- **Package manager**: Yarn v4 (Berry) with node-modules linker. Use `yarn` not `npm`.
