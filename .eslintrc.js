module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier", "@vue/typescript"],
  rules: {
    "no-useless-escape": 0,
    "no-multiple-empty-lines": [
      2,
      {
        max: 3
      }
    ],
    "prettier/prettier": [
      "error",
      {
        tabWidth: 2,
        useTabs: true,
        singleQuote: true,
        semi: false,
        trailingComma: "none",
        bracketSpacing: true,
        jsxBracketSameLine: true,
        insertPragma: true,
        requirePragma: false
      }
    ],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    semi: [2, "never"]
  },
  parserOptions: {
    parser: "typescript-eslint-parser"
  }
}
