const js = require('@eslint/js')
const vue = require('eslint-plugin-vue')

module.exports = [
  js.configs.recommended,
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: require('vue-eslint-parser'),
      parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
        ecmaVersion: 2020,
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      vue
    },
    rules: {
      'vue/no-multiple-template-root': 'off',
      'vue/require-default-prop': 'off',
      ...vue.configs.recommended.rules
    }
  },
  {
    files: ['**/*.js', '**/*.ts'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        node: true
      }
    }
  }
];