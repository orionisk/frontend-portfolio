import Swiper, { Pagination, Navigation, Zoom, Thumbs, Keyboard } from 'swiper';

Swiper.use([Pagination, Navigation, Zoom, Thumbs, Keyboard]);

export const createLightboxSliders = wrapperCn => {
  document.querySelectorAll(wrapperCn).forEach(wrapper => {
    const lbEl = wrapper.querySelector('.product-view-lightbox-container');
    const mainEl = wrapper.querySelector('.product-view-slider-container');
    const thumbsEl = wrapper.querySelector('.product-view-thumbs-container');

    const thumbsSwiper = new Swiper(thumbsEl, {
      spaceBetween: 10,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      navigation: {
        nextEl: thumbsEl.nextElementSibling,
        prevEl: thumbsEl.nextElementSibling.nextElementSibling,
        disabledClass: 'promo-slider-nav-disabled'
      },
      breakpoints: {
        0: {
          slidesPerView: 3
        },

        576: {
          slidesPerView: 4
        }
      }
    });

    const main = new Swiper(mainEl, {
      slidesPerView: 1,
      observer: true,
      thumbs: {
        swiper: thumbsSwiper
      }
    });

    // modal
    new Swiper(lbEl, {
      slidesPerView: 1,

      observer: true,
      observeParents: true,
      observeChildren: true,

      // preloadImages: false,
      // lazy: true,

      spaceBetween: 10,
      navigation: {
        nextEl: '.product-view-lightbox-next',
        prevEl: '.product-view-lightbox-prev'
      },
      thumbs: {
        swiper: main
      },
      zoom: {
        maxRatio: 2,
        toggle: true
      },
      keyboard: {
        enabled: true
      }
    });
  });
};
