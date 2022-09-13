module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir : __dirname, 
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'import'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
     // Prettier code style seetings
     'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    // Change console to warn
    'no-console': 'warn',
    // Import requirements
    'import/order': [
      'error',
      {
        // Alphabetic import
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
        // Group imports
        groups: [
          'builtin',
          'external',
          'index',
          'sibling',
          'parent',
          'internal',
        ],
        // Split imports on new lines
        'newlines-between': 'always-and-inside-groups',
      },
    ],
    // Disable export default
    'import/prefer-default-export': ['off'],
    // Enable import from devDep
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    // Turn off rules to setup them on typescript
    'no-useless-constructor': 'off',
    // Error on useless constructor
    '@typescript-eslint/no-useless-constructor': ['error'],
    // Next Config
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
};
