module.exports = {
  plugins: [require('@prettier/plugin-pug')],
  printWidth: 100,
  singleQuote: true,
  trailingComma: 'none',
  arrowParens: 'avoid',
  bracketSpacing: true,

  pugSingleQuote: false,
  pugClassNotation: 'as-is',
  overrides: [
    {
      files: '**/*.pug',
      options: { parser: 'pug' }
    }
  ]
};
