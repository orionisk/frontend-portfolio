const { cva } = require('class-variance-authority');
const cvaButton = cva('transition-colors', {
  variants: {
    intent: {
      v1: 'bg-black'
    },
    size: {
      large: 'h-[60px] w-64',
      medium: 'h-[60px] w-[188px]',
      small: 'h-[60px] w-40'
    },
    font: {
      medium: 'text-xl',
      small: 'text-[15px]'
    }
  },
  defaultVariants: {
    intent: 'v1',
    size: 'medium',
    font: 'medium'
  }
});

module.exports = cvaButton;
