import Micromodal from 'micromodal';

import { createAccordion } from './accordion';
import { createSliders } from './sliders';
import { createTabs, createFilterTabs } from './tabs';
import { createLightboxSliders } from './lightbox';
import { createMenu } from './menu';
import { createRangeSlider } from './rangeSlider';
import { initForms } from './forms';
// import { createPriceSlider } from './priceSlider';

window.addEventListener('DOMContentLoaded', () => {
  Micromodal.init({
    awaitCloseAnimation: true
    // disableScroll: true
  });

  createAccordion('.faq-items > li');
  createTabs('.tab-container', '.tab-button', '.tab-content');
  createFilterTabs('.products-filters', '.filter-btn', '.filter-dropdown');
  createSliders();
  createLightboxSliders('.product-view');
  createMenu('.menu-nav--header', '.menu-burger--header', '.overlay--header');
  createMenu(
    '.menu-nav--catalog',
    '.menu-burger--catalog',
    '.overlay--catalog'
  );
  createRangeSlider('.products-filter-form');
  initForms();
});
