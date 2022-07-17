module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'prettier', 'plugin:import/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    // 'import/resolver': 'webpack',
    'import/resolver': {
      alias: {
        map: [
          ['Styles', './src/styles'],
          ['Images', './src/assets/images/'],
          ['Audio', './src/assets/audio/'],
        ],
        extensions: ['.js', '.scss'],
      },
    },
  },
  rules: {
    'import/extensions': ['error', { '.js': 'never', '.scss': 'never' }],
    'prefer-destructuring': ['error', { object: true, array: false }],
  },
};
