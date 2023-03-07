module.exports = {
  ...require("./base"),
  // https://github.com/IanVS/prettier-plugin-sort-imports/blob/9c1cb1c9480bcd341cf9bb4f4a061a7c60fc50ff/README.md
  importOrderBuiltinModulesToTop: true,
  importOrderCombineTypeAndValueImports: true,
  importOrderMergeDuplicateImports: true,
  importOrderSortSpecifiers: true,
};
