// @ts-check

import base from "./base";

/**
 * Recommended Prettier ルール
 * - 追加ルール1: sort-imports
 *   - ref: https://github.com/IanVS/prettier-plugin-sort-imports/blob/9c1cb1c9480bcd341cf9bb4f4a061a7c60fc50ff/README.md
 *
 * @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig}
 */

const recommended = {
  ...base,
  importOrderBuiltinModulesToTop: true,
  importOrderCombineTypeAndValueImports: true,
  importOrderMergeDuplicateImports: true,
  importOrderSortSpecifiers: true,
};

export default recommended;
