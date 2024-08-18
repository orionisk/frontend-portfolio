// import { Swiper, Navigation, Pagination } from 'swiper';

// export const promoSwiper = (el, opts) => ({
//   swiper: new Swiper(el, { modules: [Navigation, Pagination], ...opts })
// });

export const promoSwiper = async () => {
  const SwiperModule = await import(
    /* webpackExports: ["Swiper", "Navigation", "Pagination"] */
    /* webpackChunkName: "npm/swiper_8.4.6" */
    'swiper'
  );

  const { Swiper, Navigation, Pagination } = SwiperModule;

  return (el, opts) => ({
    swiper: new Swiper(el, { modules: [Navigation, Pagination], ...opts })
  });
};
