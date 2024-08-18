import Alpine from 'alpinejs';
import intersectClass from 'alpinejs-intersect-class';
import Intersect from '@alpinejs/intersect';

import Scroll from './alpine/siv';
import Validate from './alpine/validate';

import createLazyLoadInstance from './lazyloadInit';
import { docModalTrigger } from './modals/modals';
import { sourcesModalTrigger } from './modals/sourcesModal';
import { docForm } from './forms/docForm';
import { initSectorPopover } from './sectorPopover';
import { infraSwiper } from './swiper';
import { initStagesAnimation, initCloudsAnimation, initHeaderAnimation } from './animations';
import { mobileMenu, mobileMenuTrigger } from './menu/mobileMenu';

export const LazyLoadInstance = createLazyLoadInstance();

Alpine.plugin(Validate);
Alpine.plugin(Scroll);
Alpine.plugin(Intersect);
Alpine.plugin(intersectClass);

Alpine.data('infraSwiper', () => ({ ...infraSwiper }));
Alpine.data('docModalTrigger', () => ({ ...docModalTrigger }));
Alpine.data('sourcesModalTrigger', () => ({ ...sourcesModalTrigger }));
Alpine.data('docForm', () => ({ ...docForm }));
Alpine.data('mobileMenuTrigger', () => ({ ...mobileMenuTrigger }));
Alpine.data('mobileMenu', () => ({ ...mobileMenu }));
Alpine.start();

initStagesAnimation();
initCloudsAnimation();
initHeaderAnimation();
initSectorPopover('.path-sector', 'data-template');
