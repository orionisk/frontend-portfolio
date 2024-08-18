/** @type {import('eslint').Linter.Config} */
const config = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest'
  },
  extends: ['eslint:recommended', 'prettier', 'plugin:tailwindcss/recommended'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'tailwindcss/no-custom-classname': 'off'
  },
  plugins: ['tailwindcss'],
  settings: {
    tailwindcss: {
      callees: ['classnames', 'clsx', 'ctl', 'cn', 'cva'],
      config: 'tailwind.config.js'
    }
  }
};

module.exports = config;
