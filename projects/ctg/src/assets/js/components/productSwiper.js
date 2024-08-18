export const productSwiper = async () => {
  const SwiperModule = await import(
    /* webpackExports: ["Swiper", "Navigation", "Thumbs"] */
    /* webpackChunkName: "npm/swiper_8.4.6" */
    'swiper'
  );

  const { Swiper, Navigation, Thumbs } = SwiperModule;

  return ([el, opts = {}], [thumbsEl, thumbsOpts = {}]) => {
    const thumbs = new Swiper(thumbsEl, {
      modules: [Navigation],
      watchSlidesProgress: true,
      slidesPerView: 5,
      spaceBetween: 5,
      direction: 'horizontal',
      breakpoints: {
        376: {
          spaceBetween: 8
        },
        768: {
          direction: 'vertical'

          // slidesPerView: 5
        }
      },
      ...thumbsOpts
    });
    const swiper = new Swiper(el, {
      modules: [Thumbs, Navigation],
      slidesPerView: 1,
      spaceBetween: 10,
      thumbs: {
        swiper: thumbs
      },
      watchSlidesProgress: true,
      ...opts
    });
    return {
      init() {
        this.loaded = true;
      },
      loaded: false,
      get thumbs() {
        return swiper;
      },
      get swiper() {
        return swiper;
      }
    };
  };
};
