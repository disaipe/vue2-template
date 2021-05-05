// https://eslint.org/docs/user-guide/configuring/
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    // https://eslint.vuejs.org/rules/
    'plugin:vue/essential'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
    indent: ['warn', 2],
    quotes: ['warn', 'single'],
    'no-unused-vars': ['warn']
  }
};
