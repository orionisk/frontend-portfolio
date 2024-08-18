const pugOptions = {
    pugSingleQuote: false,
    pugClassNotation: 'as-is',
    overrides: [{ files: '*.pug', options: { parser: 'pug' } }]
};

/** @type {import('prettier').Config} */
module.exports = {
    plugins: [
        // require('@prettier/plugin-php'),
        require('@prettier/plugin-pug'),
        require('prettier-plugin-tailwindcss')
    ],
    // pluginSearchDirs: false,
    printWidth: 100,
    singleQuote: true,
    trailingComma: 'none',
    arrowParens: 'avoid',
    bracketSpacing: true,

    ...pugOptions
};
