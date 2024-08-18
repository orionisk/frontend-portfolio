import './lazyload/lzInstance';

import Alpine from 'alpinejs';
import { mobileMenu } from './components/mobileMenu';
import { promoSwiperInit } from './components/promoSwiper';
import { testimonialsSwiperInit } from './components/testimonialsSwiper';

promoSwiperInit();
testimonialsSwiperInit();

Alpine.data('mobileMenu', (opts = {}) => ({ ...mobileMenu, opts }));
Alpine.start();
