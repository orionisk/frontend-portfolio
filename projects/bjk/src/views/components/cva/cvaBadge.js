const { cva } = require('class-variance-authority');

// const cn = require('classnames');
// cn('group bg-lightsalmon-02 p-10');

const cvaBadge = cva(
  'flex items-center justify-center rounded-lg py-1 px-3 font-semibold text-white',
  {
    variants: {
      intent: {
        primary: 'bg-lightsalmon-03',
        important: 'bg-danger-01',
        info: 'bg-cadetblue-03',
        success: 'bg-success-01'
      }
    },
    defaultVariants: {
      intent: 'primary'
    }
  }
);

module.exports = cvaBadge;
