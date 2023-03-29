// @ts-check

/**
 * Next.js + TypeScript の Base ESLint ルール
 * - extends rules:
 *   - ref: https://typescript-eslint.io/linting/configs
 *   - ref: https://nextjs.org/docs/basic-features/eslint
 * - 追加ルール1: unused imports
 *   - ref: https://github.com/sweepline/eslint-plugin-unused-imports
 *
 * @type {import("eslint").ESLint.ConfigData}
 */
const base = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "next",
    "next/core-web-vitals",
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
};

export default base;
