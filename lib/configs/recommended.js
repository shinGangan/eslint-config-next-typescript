import base from "./base";
import sb from "./sb";

/**
 * Next.js + TypeScript の Recommended ESLint ルール
 * - 追加ルール1: Return Typesの明示を必須に
 *   - ref: https://typescript-eslint.io/rules/explicit-function-return-type/
 * - 追加ルール2: NODE_ENV に合わせて 'no-console' 設定を可変
 * - 追加ルール3: NODE_ENV に合わせて 'no-debugger' 設定を可変
 *
 * @type {import("eslint").ESLint.ConfigData}
 */
const recommended = {
  extends: [base, sb, "prettier"],
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
};

export default recommended;
