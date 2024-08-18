import Swiper, { Pagination } from 'swiper';

export const testimonialsSwiperInit = () => {
  new Swiper('.testimonials-swiper', {
    modules: [Pagination],
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });
};
