import Alpine from 'alpinejs';
import AsyncAlpine from 'async-alpine';
import { productQuantity } from 'js/components/productQuantity.js';
import { productSwiper } from 'js/components/productSwiper.js';

AsyncAlpine.data('productSwiper', productSwiper);
Alpine.data('productQuantity', productQuantity);
