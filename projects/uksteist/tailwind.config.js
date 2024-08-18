const withAnimations = require('animated-tailwindcss');

/** @type {import('tailwindcss/types/config').PluginCreator} */
const utilities = ({ addUtilities }) => {
  addUtilities({
    '.flex-between-center': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  });
};

module.exports = withAnimations({
  separator: '_',
  content: ['./src/**/*.{html,js,pug}'],
  theme: {
    screens: {
      xs: '391px',
      dxs: { max: '390.98px' },
      sm: '640px',
      dsm: { max: '639.98px' },
      md: '768px',
      dmd: { max: '767.98px' },
      lg: '1024px',
      dlg: { max: '1023.98px' },
      xl: '1200px',
      dxl: { max: '1199.98px' }
    },
    extend: {
      spacing: {
        '0o5': '0.125rem',
        '1o5': '0.375rem',
        '2o5': '0.625rem',
        '3o5': '0.875rem',
        '4o5': '1.125rem',
        '5o5': '1.375rem'
      },
      colors: {
        'th-firm': '#314C51',
        'th-gray': '#858685',
        'th-black': '#1D1F1D',
        'th-lightgray': '#CFD3D0',
        'th-white': '#F8F8F8',
        'th-firm2': '#77833F',
        'th-white2': '#F7F4F4'
      }
    }
  },
  plugins: [utilities]
});
