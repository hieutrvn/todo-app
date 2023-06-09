module.exports = {
env: {
    browser: true,
    es2021: true,
    node: true
},
extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'standard-with-typescript'
],
overrides: [
],
parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json']
},
plugins: [
    'react'
],
rules: {
    indent: 'off',
    semi: ['error', 'always'],
    '@typescript-eslint/semi': 'off'

}
};
