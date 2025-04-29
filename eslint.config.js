import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';

export default tseslint.config(js.configs.recommended, ...tseslint.configs.recommended, prettier, {
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    globals: {
      node: true,
      browser: true,
      es2021: true,
    },
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'warn',
  },
});
