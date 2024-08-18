import Swiper from 'swiper';
import { FreeMode } from 'swiper';

// const { Swiper, FreeMode } = await import(/* webpackChunkName: "swiper" */ 'swiper');

export const bebasSwiper = () => {
  new Swiper('.bebas-swiper', {
    modules: [FreeMode],
    slidesPerView: 'auto',
    freeMode: true,
    spaceBetween: 20
  });
};
