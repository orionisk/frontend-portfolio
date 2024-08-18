import Alpine from 'alpinejs';
import AsyncAlpine from 'async-alpine';
import { catalogView } from 'js/components/catalogView.js';

AsyncAlpine.data('rangeSlider', () =>
  import(/* webpackChunkName: "lazy/rangeSlider" */ 'js/components/rangeSlider.js')
);

Alpine.data('catalogView', catalogView);
