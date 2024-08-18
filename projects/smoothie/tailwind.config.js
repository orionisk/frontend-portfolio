const { withAnimations } = require('animated-tailwindcss');

/** @type {import('tailwindcss/types/config').PluginCreator} */
const utilities = ({ addUtilities }) => {
  addUtilities({});
};

module.exports = withAnimations({
  separator: '_',
  content: ['./src/**/*.{html,js,pug}'],
  theme: {
    screens: {
      xs: '425px',
      dxs: { max: '424.98px' },
      sm: '640px',
      dsm: { max: '639.98px' },
      md: '768px',
      dmd: { max: '767.98px' },
      lg: '1024px',
      dlg: { max: '1023.98px' },
      xl: '1200px',
      dxl: { max: '1199.98px' }
      // '2xl': '1600px'
    },
    extend: {
      colors: {
        'dusty-gray': '#9a9a9a',
        matterhorn: '#433840',
        'rose-bud': '#f7a1a8',
        'sweet-pink': '#fea3aC',
        caper: '#dfeeB6',
        'periwinkle-gray': '#b1cfe1',
        'link-water': '#c9e3f4',
        remy: '#fee9ef'
      },
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
        wfts: ['"Waiting for the Sunrise"', 'sans-serif']
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
  plugins: [
    utilities
    // require('daisyui')
  ]
  // daisyui: {
  //   themes: false
  // }
});
