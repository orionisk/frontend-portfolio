module.exports = {
  plugins: [require('@prettier/plugin-pug'), require('prettier-plugin-tailwindcss')],
  // pluginSearchDirs: false,
  printWidth: 100,
  singleQuote: true,
  trailingComma: 'none',
  arrowParens: 'avoid',
  bracketSpacing: true,

  pugSingleQuote: true,
  pugClassNotation: 'as-is',
  overrides: [
    {
      files: '**/*.pug',
      options: { parser: 'pug' }
    }
  ]
};
