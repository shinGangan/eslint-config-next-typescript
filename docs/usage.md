<!-- docs/usage.md -->

# Usage

## create-next-app 作成後

### 前提条件

create-next-app を実行し、`.eslintrc.json`が生成済みであること。

```json
{
  "extends": "next/core-web-vitals"
}
```

### 1. ESLint 設定

`.eslintrc.json`を`.eslintrc.js`に変更し、以下を追加する。

```js
module.exports = {
  exnteds: ["recommend"],
};
```

### 2. Prettier 設定

`.prettierrc.js`を作成する。

```shell
$ cat <<EOF .prettierrc.js
const recommend = require('@Shimpei-GANGAN/eslint-config-next-typescript/lib/prettier-configs/recommended');

module.exports = {
  ...recommend,
};
EOF
```

### 3. Draft: Stylelint 設定

### 4. Draft: Markuplint 設定

## 既存 ESLint 設定が存在する場合

[Installation](./installation.md) ページを参照し各種インストールを実施してください。

インストール完了後、[Usage](./usage.md)ページの手順を実施してください。
