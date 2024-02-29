module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'next/core-web-vitals',
    '@amnis/eslint-config-node',
  ],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        svg: 'always',
      },
    ],
    'no-shadow': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-use-before-define': [
      'error',
      {
        functions: true,
        classes: true,
        variables: false,
        allowNamedExports: false,
      },
    ],
  },
  overrides: [
    {
      files: ['**/tailwind.config.js', '**/tailwind.config.ts'],
      rules: {
        'import/extensions': 'off',
        'global-require': 'off',
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};
