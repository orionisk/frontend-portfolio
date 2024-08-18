const { cva } = require('class-variance-authority');
const cn = require('classnames');

// cn('mx-auto mt-5 grid gap-x-5 gap-y-10 xs_mt-10 lg_mt-20 lg_grid-cols-2');

const cvaInput = cva(
  'rounded-[5px] border-[3px] border-remy px-5 text-lg font-light text-matterhorn placeholder_text-dusty-gray focus_outline-caper',
  {
    variants: {
      type: {
        input: cn('h-16'),
        textarea: cn('h-28 pt-4')
      }
    },
    defaultVariants: {
      type: 'input'
    }
  }
);

module.exports = cvaInput;
