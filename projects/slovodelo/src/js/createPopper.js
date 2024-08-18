import {
  popperGenerator,
  defaultModifiers
} from '@popperjs/core/lib/popper-lite';
import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow';
import offset from '@popperjs/core/lib/modifiers/offset';

const createPopper = popperGenerator({
  defaultModifiers: [
    ...defaultModifiers,
    { ...preventOverflow, options: { padding: 20 } },
    { ...offset, options: { offset: [0, 25] } }
  ]
});

export default createPopper;
