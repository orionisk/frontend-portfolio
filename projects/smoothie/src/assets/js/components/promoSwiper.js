import Swiper, { Navigation } from 'swiper';

export const promoSwiperInit = () => {
  new Swiper('.promo-swiper', {
    modules: [Navigation],
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
};
