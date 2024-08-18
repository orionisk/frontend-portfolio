const { cva } = require('class-variance-authority');

const input = cva([
  [
    'relative flex w-full max-w-[280px] items-center gap-2 rounded-lg border border-white-04 bg-white py-2.5 px-4 pr-10 outline-none',
    'transition-colors hover_border-cadetblue-03 focus_border-cadetblue-03 focus_placeholder_pl-2'
  ]
]);

module.exports = { input };
