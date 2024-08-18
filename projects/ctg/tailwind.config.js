const { withAnimations } = require('animated-tailwindcss');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss/types/config').PluginCreator} */
const utilities = ({ addUtilities }) => {
  addUtilities({
    '.vertical-rl': {
      writingMode: 'vertical-rl'
    }
  });
};

module.exports = withAnimations({
  separator: '_',
  content: ['./src/**/*.{html,js,pug}'],
  // safelist: [],
  theme: {
    screens: {
      '2xs': '375px',
      xs: '425px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1400px'
    },
    extend: {
      fontSize: {
        '4xl': ['2.1875rem', '1.5'],
        '5xl': ['2.8125rem', '1.5']
      },
      colors: {
        flamingo: {
          '01': '#F35D14',
          '02': '#F57B3F'
        },
        'cod-gray': '#171717',
        boulder: '#7B7B7B',
        woodsmoke: '#18191F',
        alto: '#DADADA',
        mustard: '#FFD74A',
        silver: '#C4C4C4',
        alabaster: '#F9F9F9'
      },
      spacing: {
        '0o5': '0.125rem',
        '1o5': '0.375rem',
        '2o5': '0.625rem',
        '3o5': '0.875rem',
        '4o5': '1.125rem',
        4.5: '1.125rem',
        '5o5': '1.375rem'
      },
      fontFamily: {
        inter: ['InterVariable', ...defaultTheme.fontFamily.sans],
        michroma: ['Michroma', ...defaultTheme.fontFamily.sans],
        marianina: ['MarianinaFY', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [utilities, require('tailwind-clip-path')]
});
