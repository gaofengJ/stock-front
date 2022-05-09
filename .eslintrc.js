module.exports = {
  env: {
    'browser': true,
    'es6': true,
  },
  extends: [
    'eslint:recommended',
    'airbnb',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  globals: {},
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  ignorePatterns: ['.eslintrc.js', 'vite.config.ts', 'tsconfig.json','.stylelintrc.json'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.js', 'jsx', '.tsx'],
      },
      alias: {
        map: [
          ['@', './src'],
        ],
        extensions: ['.ts', '.js', 'jsx', '.tsx'],
      }
    }
  },
  rules: {
    'import/prefer-default-export': 'off',
    // suppress errors for missing 'import React' in files
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'no-use-before-define': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
   ],
  },
};
