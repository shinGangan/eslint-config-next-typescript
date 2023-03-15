<!-- docs/installation.md -->

# Installation

## Quick Start

```shell
npm i -D @Shimpei-GAGAN/eslint-config-next-typescript
```

## Add to existing ESLint configuration

### Common

```shell
npm i -D eslint \
         eslint-plugin-unused-imports
```

.eslintrc / .eslintrc.js に以下を追加する.

```javascript
// .eslintrc.js
{
  extends: [
    "eslint:recommended",
  ],
  plugins: ["unused-imports"],
  rules: {
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
  },
}

```

### TypeScript

```shell
npm i -D @typescript-eslint/eslint-plugin
```

.eslintrc / .eslintrc.js に以下を追加する.

```javascript
// .eslintrc.js
{
  extends: [
    ...,
    "plugin:@typescript-eslint/recommended",
    ...,
  ],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.js", "*.jsx"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": "error",
      },
    },
  ],
}
```

### Next.js

```shell
npm i -D eslint-config-next
```

.eslintrc / .eslintrc.js に以下を追加する.

```javascript
// .eslintrc.js
{
  extends: [
    ...,
    "next",
    "next/core-web-vitals",
    ...,
  ]
}
```

### Prettier

```shell
npm i -D prettier \
         eslint-config-prettier \
         @ianvs/prettier-plugin-sort-imports
```

.eslintrc / .eslintrc.js に以下を追加する. ESLint ルールとの干渉を避けるため, extends の最後に`prettier`を追記する.

```javascript
// .eslintrc.js
{
  extends: [
    ...,
    "prettier",
  ],
}
```

### Storybook

```shell
npm i -D eslint-plugin-storybook
```

.eslintrc / .eslintrc.js に以下を追加する.

```javascript
// .eslintrc.js
{
  extends: [
    ...,
    "plugin:storybook/recommended",
    ...,
  ],
}
```

### TBD: MUI
