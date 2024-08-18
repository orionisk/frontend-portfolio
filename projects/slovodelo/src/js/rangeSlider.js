import noUiSlider from 'nouislider';

export const createRangeSlider = cn => {
  document.querySelectorAll(cn).forEach(form => {
    const s = form.querySelector('.multi-range');

    const minEl = form.querySelector('.range-slider-input--min');
    const maxEl = form.querySelector('.range-slider-input--max');
    if (!minEl || !maxEl || !s) return;

    const minInitial = +minEl.value;
    const maxInitial = +maxEl.value;

    noUiSlider.create(s, {
      start: [minInitial, maxInitial],
      connect: true,
      behaviour: 'drag',
      // step: 5,
      range: {
        min: +minEl.min || 0,
        max: +maxEl.max || 10000
      }
    });

    s.noUiSlider.on('update', (values, handle) => {
      const value = Math.round(values[handle]);

      if (handle) maxEl.value = value;
      else minEl.value = value;
      const e = new Event('input', { cancelable: true });

      form.dispatchEvent(e);
    });

    maxEl.addEventListener('input', e => {
      s.noUiSlider.set([null, e.target.value]);
      // form.onChange();
    });

    minEl.addEventListener('input', e => {
      s.noUiSlider.set([e.target.value, null]);
    });
    form.addEventListener('reset', () => {
      s.noUiSlider.set([minInitial, maxInitial]);
    });
  });
};
