const defaultTheme = require('tailwindcss/defaultTheme');
const {withAnimations} = require('animated-tailwindcss');

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
  theme: {
    screens: {
      '2xs': '360px',
      xs: '425px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1272px'
    },
    colors: {
      transparent: 'transparent',
      lightsalmon: {
        '01': '#ED5314',
        '02': '#F0703B',
        '03': '#F38D63',
        '04': '#F5A482',
        '05': '#F8BBA1',
        '06': '#FAD1C1',
        '07': '#FDE8E0'
      },
      cadetblue: {
        '01': '#1A6370',
        '02': '#228495',
        '03': '#2BA5BA',
        '04': '#55B7C8',
        '05': '#80C9D6'
      },
      paleturquoise: {
        '01': '#46878F',
        '02': '#5DB4BF',
        '03': '#74E1EF',
        '04': '#90E7F2',
        '05': '#EEFBFD'
      },
      darkslateblue: {
        '01': '#171A3F',
        '02': '#1F2354',
        '03': '#3A3C70',
        '04': '#525687',
        '05': '#7D80A5'
      },
      white: {
        DEFAULT: '#FFFFFF',
        '01': '#FFFFFF',
        '02': '#F4F4F4',
        '03': '#E5E5E5',
        '04': '#D9D9D9',
        '05': '#CCCCCC'
      },
      black: {
        '01': '#1A1A1A',
        '02': '#333333',
        '03': '#4D4D4D',
        '04': '#666666'
      },
      success: {
        '01': '#51A351',
        '02': '#7DBA7D',
        '03': '#D5E9D5',
        '04': '#F3F8F3'
      },
      warning: {
        '01': '#FFC107',
        '02': '#FFD145',
        '03': '#FFF0C4',
        '04': '#FFFBED'
      },
      danger: {
        '01': '#EC5252',
        '02': '#F17D7D',
        '03': '#FBD6D6',
        '04': '#FDF3F3'
      }
    },
    fontSize: {
      '2xs': ['0.625rem', '1.5'],
      xs: ['0.75rem', '1.5'],
      sm: ['0.875rem', '1.4'],
      base: ['1rem', '1.4'],
      lg: ['1.25rem', '1.2'],
      xl: ['1.5rem', '1.2'],
      '2xl': ['2rem', '1.2'],
      '3xl': ['2.5rem', '1.2']
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans]
      },
      spacing: {
        '0o5': '0.125rem',
        '1o5': '0.375rem',
        '2o5': '0.625rem',
        '3o5': '0.875rem',
        '4o5': '1.125rem',
        4.5: '1.125rem',
        '5o5': '1.375rem'
      }
    }
  },
  plugins: [utilities]
});
