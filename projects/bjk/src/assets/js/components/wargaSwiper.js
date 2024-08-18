import Swiper from 'swiper';
import { FreeMode } from 'swiper';

export const wargaSwiper = () => {
  new Swiper('.warga-swiper', {
    modules: [FreeMode],
    slidesPerView: 'auto',
    freeMode: true,
    spaceBetween: 20
  });
};
