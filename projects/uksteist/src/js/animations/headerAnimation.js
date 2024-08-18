import { timeline } from 'motion';

/** @typedef {[import('motion').ElementOrSelector, import('motion').StyleAnimationOptions, import('motion').ElementOrSelector][]} seq */
/** @type {seq} */
const seq1 = [
  ['#promo-11', { opacity: [0, 1] }],
  ['#header-top', { opacity: [0, 1], y: [-50, 0] }],
  ['#header-menu', { opacity: [0, 1], y: [-50, 0] }, { at: '<' }],
  ['#menu-burger', { opacity: [0, 1], y: [-50, 0] }, { at: '<' }],
  ['#header-menu', { borderTopColor: ['transparent', '#858685'] }],
  ['#promo-h1', { opacity: [0, 1], y: [-50, 0] }, { at: '<' }],
  ['#promo-h3', { opacity: [0, 1], y: [-50, 0] }]
];

export const initHeaderAnimation = () => {
  timeline(seq1, { delay: 1, duration: 2.25 });
};
