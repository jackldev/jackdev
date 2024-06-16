import eslintPluginAstro from 'eslint-plugin-astro'

export default [
  ...eslintPluginAstro.configs.recommended,
  {
    languageOptions: {
      sourceType: 'module'
    },
    rules: {
      'no-undef': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      // '@typescript-eslint/no-explicit-any': 'warn',
      // '@typescript-eslint/ban-types': 'warn',
      '@typescript-eslint/consistent-type-definitions': 'off',
      'no-irregular-whitespace': 'off'
    }
  }
]
