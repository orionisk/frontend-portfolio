const { cva } = require('class-variance-authority');
const cvaButton = cva('rounded-[5px] outline-rose-bud transition-colors', {
  variants: {
    intent: {
      v1: 'bg-sweet-pink font-bold text-white hover_bg-periwinkle-gray',
      v2: 'bg-link-water font-medium text-white hover_bg-caper',
      v3: 'border-[3px] border-caper font-medium text-caper hover_bg-caper hover_text-white',
      v4: 'border bg-caper font-medium text-white hover_bg-sweet-pink hover_text-white',
      v5: 'border-[3px] border-white bg-transparent font-medium text-white hover_bg-white hover_text-caper'
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
