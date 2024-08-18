const { cva } = require('class-variance-authority');
const { twMerge } = require('tailwind-merge');
// const cn = require('classnames');
// cn('group bg-lightsalmon-02 p-10');

const cvaButton = o =>
  twMerge(
    cva(
      'flex items-center justify-center rounded border py-3 px-6 text-center text-sm font-semibold',
      {
        variants: {
          intent: {
            primary: [
              'bg-lightsalmon-03 border-lightsalmon-03 text-white',
              '[&:not(:disabled)]_hover_bg-lightsalmon-02 [&:not(:disabled)]_hover_border-lightsalmon-02'
            ],
            secondary: [
              'bg-darkslateblue-03 border-darkslateblue-03 text-white',
              '[&:not(:disabled)]_hover_bg-darkslateblue-01 [&:not(:disabled)]_hover_border-darkslateblue-01,'
            ],
            tertiary: [
              'bg-white text-lightsalmon-03',
              '[&:not(:disabled)]_hover_bg-lightsalmon-07 [&:not(:disabled)]_hover_border-lightsalmon-06'
            ]
          },
          type: {
            button: '',
            link: ''
          }
        },
        compoundVariants: [
          {
            type: 'button',
            class: 'disabled_bg-white-05 disabled_border-white-05'
          }
        ],
        defaultVariants: {
          intent: 'primary',
          type: 'button'
        }
      }
    )(o)
  );

module.exports = cvaButton;
