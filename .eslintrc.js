module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: "@typescript-eslint/parser", //"babel-eslint" is another option
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "react", "prettier"],

  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    // "airbnb",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    // "plugin:prettier/recommended",
    // "prettier/@typescript-eslint",
  ],

  rules: {
    // NextJs does not require you to import React into each component. so suppress errors for missing 'import React' in files.
    "react/react-in-jsx-scope": "off",
    "react/display-name": 1,
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-unused-vars": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  globals: {
    // NextJs does not require you to import React into each component. so suppress errors for missing 'import React' in files.
    React: "writable",
  },
};