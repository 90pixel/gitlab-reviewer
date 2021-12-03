module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  plugins: ['prettier', '@typescript-eslint'],
  extends: [
    'next',
    'next/core-web-vitals',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'max-len': ['error', { code: 100 }],
    'jsx-a11y/alt-text': 'off',
    'import/no-anonymous-default-export': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'no-unused-expressions': 'warn',
    'no-unused-labels': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/self-closing-comp': 'error',
    'no-undef': 'error',
    'prettier/prettier': 'error',
  },
  ignorePatterns: ['.eslintrc.js'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@next/next/no-img-element': 'off',
        '@typescript-eslint/require-await': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
      },
    },
  ],
};
