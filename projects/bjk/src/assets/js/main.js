import Alpine from 'alpinejs';
import collapse from '@alpinejs/collapse';
import focus from '@alpinejs/focus';

import { accordion, bebasSwiper, wargaSwiper } from './components';
import './lazyload/lzInstance';

Alpine.plugin(collapse);
Alpine.plugin(focus);

wargaSwiper();
bebasSwiper();

Alpine.data(...accordion);

Alpine.start();
