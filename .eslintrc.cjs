module.exports = {
  root: true,
  extends: ['@do-ob/eslint-config'],
  overrides: [
    {
      files: ['tailwind.config.{ts,js}', 'postcss.config.{ts,js}'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        'no-undef': 'off',
      }
    },
    {
      files: ['*.stories.ts'],
      extends: ['plugin:storybook/recommended', '@do-ob/eslint-config'],
    }
  ]
};
