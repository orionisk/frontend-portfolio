import { addFloatingUiForTooltips } from './addFloatingUiForTooltips.js';

const isColliding = function (div1, div2, threshold = 0) {
  const rect1 = div1.getBoundingClientRect();
  const rect2 = div2.getBoundingClientRect();
  return rect1.right >= rect2.left - threshold;
};

const setVisibility = (el, v) => {
  if (v) el.classList.remove('!invisible');
  else el.classList.add('!invisible');
};

export const mergeTwoTooltips = (slider, threshold, separator, boundary) => {
  const tooltips = slider.getTooltips();
  const handles = slider.getOrigins().map(o => o.querySelector('.noUi-handle'));
  const connectBar = slider.target.querySelector('.noUi-connect');

  const mergedTooltip = document.createElement('div');
  mergedTooltip.classList.add('noUi-tooltip', 'noUi-tooltip-single');
  slider.target.append(mergedTooltip);

  addFloatingUiForTooltips(handles, tooltips, boundary);
  addFloatingUiForTooltips(connectBar, mergedTooltip, boundary);

  // values, handleIdx, unencoded, tap, positions
  slider.on('update', values => {
    if (isColliding(tooltips[0], tooltips[1], threshold)) {
      mergedTooltip.textContent = values.join(separator);
      setVisibility(mergedTooltip, true);
      tooltips.forEach(t => setVisibility(t, false));
    } else {
      setVisibility(mergedTooltip, false);
      tooltips.forEach(t => setVisibility(t, true));
    }
  });
};
