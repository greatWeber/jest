module.exports = {
  root: true,

  env: {
    node: true
  },

  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
    'elemefe'
  ],

  parserOptions: {
    parser: 'babel-eslint'
  },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': process.env.NODE_ENV === 'production' ? 'error' : 'off'

  },

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
        '**/src/**/*.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
};
