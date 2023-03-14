const base = require("./base");

module.exports = {
  extends: [base, "prettier"],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
  },
  overrides: [
    // https://typescript-eslint.io/rules/explicit-function-return-type/
    {
      files: ["*.ts", "*.tsx", "*.js", "*.jsx"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": "error",
      },
    },
  ],
};
