import { validateInput } from './validate';

// Create tooltips for inputs
const createTooltips = input => {
  const tooltip = document.createElement('span');
  tooltip.classList.add('input-tooltip');
  // tooltip.textContent = '123';
  input.parentNode.insertBefore(tooltip, input.nextSibling);
};

const inputsInit = inputs =>
  inputs.forEach(input => {
    // createTooltips(input);
    validateInput(input);
  });

export default inputsInit;
