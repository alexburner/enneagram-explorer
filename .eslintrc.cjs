module.exports = {
  root: true,
  ignorePatterns: ['**/*.js', '**/*.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  settings: { react: { version: 'detect' } },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict',
    'prettier',
  ],
  rules: {
    // Allow vars like "_myVar"
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    // Mark class props as readonly if possible
    '@typescript-eslint/prefer-readonly': 'error',
    // Add curlies on multi-line statements (combines with prettier)
    curly: ['error', 'multi-line'],
    // Require strict equality checking
    eqeqeq: 'error',
    // Not needed for vite/esbuild transpilation
    'react/react-in-jsx-scope': 0,
    // Not needed with TypeScript
    'react/prop-types': 0,
    // Prevent extra tags for components without children
    'react/self-closing-comp': 'error',
    // Prevent missed `await` keywords
    'require-await': 'error',
    // Prevents some real head-scratcher bugs
    'no-restricted-globals': [
      'error',
      'event',
      'name',
      'length',
      'blur',
      'onBlur',
    ],
    // This can hurt, but it prevents bugs
    'no-shadow': 'error',
  },
}
