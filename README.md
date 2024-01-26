# TypeScript template

## Overview 📑

An opinionated TypeScript template repository that provides the following tooling:

| Tool                                                           | Utility           |
| -------------------------------------------------------------- | ----------------- |
| [ESLint](https://eslint.org/docs/latest/)                      | Code linter       |
| [Husky](https://typicode.github.io/husky/getting-started.html) | Git hooks         |
| [Jest](https://jestjs.io/docs/getting-started)                 | Testing framework |
| [Prettier](https://prettier.io/docs/en/)                       | Code formatter    |
| [Yarn (berry)](https://yarnpkg.com/getting-started)            | Package manager   |

## Prerequisites ✅

- [Node.js (LTS)](https://nodejs.org/en)
  - Consider using [nvm](https://github.com/nvm-sh/nvm) to manage your Node.js installations which uses the [.nvmrc](./.nvmrc) file to set the correct Node.js version
- [Yarn](https://yarnpkg.com/getting-started/install)
  - Consider managing Yarn with [corepack](https://github.com/nodejs/corepack) -- it ships with Node.js v16+ and enabling Yarn is as simple as running:
    ```
    corepack enable
    ```

## Getting started 🚀

Install dependencies:

```
yarn install
```

## Scripts 💻️

Check if all project files meet the formatting standards:

```
yarn check-format
```

Check if all project files meet the linting standards:

```
yarn check-lint
```

Run all tests:

```
yarn test
```

## Git hooks 🪝

| Hook                              | Description                                                                                                                      |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| [pre-commit](./.husky/pre-commit) | Uses [`lint-staged`](https://github.com/okonet/lint-staged) to lint and format the staged commit files before they are committed |
