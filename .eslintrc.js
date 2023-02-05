module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:nuxt/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "object-curly-spacing": ["error", "always"],
    "arrow-body-style": ["error", "always"],
    "indent": ["error", 2],
    "semi": [
      "warn",
      "always"
    ],
    "no-console": "warn",
    "quotes": [
      "warn",
      "double",
      {
        "avoidEscape": true
      }
    ],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error", {
      "vars": "local",
      "ignoreRestSiblings": false,
    }],
  },
};