module.exports = {
  root: true,
  parserOptions: {
    project: './tsconfig.json',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
    },
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    '@vue/eslint-config-airbnb',
    'airbnb-typescript-vue',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['**/types/*.d.ts', '**/dist/**'],
  rules: {
    // http://eslint.org/docs/rules/
    'max-len': 'off',
    'object-curly-newline': 'off',
    curly: ['error', 'all'],
    'no-underscore-dangle': ['error', {allow: ['__typename']}],
    'no-restricted-imports': [
      'error',
      {
        patterns: ['..*'],
      },
    ],

    // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
    'import/no-extraneous-dependencies': ['error', {devDependencies: true}],
    'import/prefer-default-export': 'off',
  },
};
