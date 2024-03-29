module.exports = {
  root: true,
  extends: [
    '@do-ob/eslint-config',
  ],
};
// module.exports = {
//   root: true,
//   env: { browser: true, es2020: true },
//   extends: [
//     'next/core-web-vitals',
//     '@amnis/eslint-config-node',
//   ],
//   rules: {
//     'import/prefer-default-export': 'off',
//     'import/extensions': [
//       'off',
//       'ignorePackages',
//       {
//         ignorePackages: true,
//         svg: 'always',
//         js: 'off',
//         jsx: 'off',
//         ts: 'off',
//         tsx: 'off',

//       },
//     ],
//     'no-restricted-exports': 'off',
//     'no-shadow': 'off',
//     '@typescript-eslint/no-explicit-any': 'off',
//     'no-use-before-define': [
//       'error',
//       {
//         functions: true,
//         classes: true,
//         variables: false,
//         allowNamedExports: false,
//       },
//     ],
//   },
//   overrides: [
//     {
//       files: ['**/tailwind.config.{js,ts,mjs}'],
//       rules: {
//         'import/extensions': 'off',
//         'global-require': 'off',
//         '@typescript-eslint/no-var-requires': 'off',
//       },
//     },
//   ],
// };
