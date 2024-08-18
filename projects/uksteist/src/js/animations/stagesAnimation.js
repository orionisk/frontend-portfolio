import { timeline, inView, animate } from 'motion';

/** @typedef {[import('motion').ElementOrSelector, import('motion').StyleAnimationOptions, import('motion').AnimationOptions][]} seq */
/** @type {seq} */
const seq1 = [['.st-bar-process', { width: [0, '413px'] }]];
/** @type {seq} */
const seq2 = [
  ['.st-circle.--c1', { fill: '#314C51' }],
  ['.st-circlet.--c1', { fill: '#314C51' }, { delay: 0.05 }],
  ['.st-circlet.--c2', { fill: '#314C51' }],
  ['.st-circlet.--c3', { fill: '#314C51' }, { delay: 0.1 }],
  ['.st-circle.--c2', { fill: '#314C51' }, { delay: 0.1 }],
  ['.st-circlet.--c4', { fill: '#314C51' }, { delay: 1 }],
  ['.st-tip', { opacity: [0, 1], y: [10, 0] }]
];

/** @type {seq} */
const seq3 = [['.mst-bar-process', { width: [0, '231px'] }]];
/** @type {seq} */
const seq4 = [
  ['.mst-circle.--c1', { fill: '#314C51' }],
  ['.mst-circlet.--c1', { fill: '#314C51' }, { delay: 0.05 }],
  ['.mst-circlet.--c2', { fill: '#314C51' }],
  ['.mst-circlet.--c3', { fill: '#314C51' }],
  ['.mst-circle.--c2', { fill: '#314C51' }, { delay: 0.1 }],
  ['.mst-circlet.--c4', { fill: '#314C51' }, { delay: 1 }],
  ['.mst-tip', { opacity: [0, 1], x: [10, 0] }]
];

export const initStagesAnimation = () => {
  inView('.s-stages-svg', () => {
    timeline(seq1, {
      duration: 3,
      delay: 1,
      defaultOptions: { easing: 'ease-out' }
    });
    timeline(seq2, {
      delay: 1,
      defaultOptions: { easing: 'ease-out' }
    });
    animate('.st-circlet.--c4', { r: [6, 7, 6] }, { repeat: Infinity, duration: 1, delay: 4 });
  });
  inView('.s-stages-svg-mobile', () => {
    timeline(seq3, {
      duration: 3,
      delay: 1,
      defaultOptions: { easing: 'ease-out' }
    });
    timeline(seq4, {
      delay: 1,
      defaultOptions: { easing: 'ease-out' }
    });
    animate('.mst-circlet.--c4', { r: [3, 4, 3] }, { repeat: Infinity, duration: 1, delay: 4 });
  });
};
