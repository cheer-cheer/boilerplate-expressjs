module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base'],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-unused-vars': 'warn',
    'no-multi-spaces': 'error',
    semi: [2, 'never'],
    'no-restricted-syntax': 0,
    'no-underscore-dangle': 0,
    'prefer-destructuring': 0,
    'func-names': 0,
    'no-continue': 0,
    'no-await-in-loop': 0,
    'no-param-reassign': 0,
    'global-require': 0,
  },
}
