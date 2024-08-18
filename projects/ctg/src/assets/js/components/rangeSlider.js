// import noUiSlider from 'nouislider';
const noUiSlider = await import(/* webpackChunkName: "npm/nouislider_15.6.1" */ 'nouislider');
import { mergeTwoTooltips } from '../utils/mergeTooltips.js';

export default (el, opts) => {
  let slider;
  return {
    init() {
      const defaultOpts = {
        animate: false,
        connect: true,
        margin: 1,
        tooltips: {
          to: value => '$' + value.toFixed(),
          from: value => parseFloat(value)
        },
        format: {
          to: value => '$' + value.toFixed(),
          from: value => parseFloat(value)
        }
      };
      slider = noUiSlider.create(el, { ...defaultOpts, ...opts });
      slider.on('update', () => {
        this.positions = slider.getPositions();
      });
      // this.tooltips = mergeTwoTooltips(slider, 20, ' — ', this.$el);
      mergeTwoTooltips(slider, 20, ' — ', this.$el);
    },
    get slider() {
      return slider;
    },
    update() {
      setTimeout(() => {
        slider.set([null, null]);
      }, 200);
    },
    value: opts.start,
    positions: []
    // tooltips: null
  };
};
