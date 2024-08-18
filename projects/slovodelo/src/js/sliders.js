import Swiper, { Pagination, Navigation, Thumbs } from 'swiper';
Swiper.use([Pagination, Navigation, Thumbs]);

export const createSliders = () => {
  // promo-slider
  document.querySelectorAll('.promo-slider').forEach(slider => {
    new Swiper(slider, {
      spaceBetween: 20,
      pagination: {
        el: '.promo-slider-pagination',
        clickable: true,
        modifierClass: 'promo-slider-pagination-',
        bulletClass:
          'promo-slider-pagination-bullet sl-pag-bullet swiper-no-swiping',
        bulletActiveClass:
          'promo-slider-pagination-bullet-active sl-pag-bullet-active'
      },
      navigation: {
        nextEl: slider.nextElementSibling,
        prevEl: slider.nextElementSibling.nextElementSibling,
        disabledClass: 'promo-slider-nav-disabled'
      }
    });
  });

  // product-small-slider slider
  document
    .querySelectorAll('.products-small-slider-container')
    .forEach(slider => {
      new Swiper(slider, {
        spaceBetween: 30,
        navigation: {
          nextEl: slider.parentElement.nextElementSibling,
          prevEl: slider.parentElement.nextElementSibling.nextElementSibling,
          disabledClass: 'products-small-slider-nav-disabled'
        },
        breakpoints: {
          320: {
            slidesPerView: 1
          },
          640: {
            slidesPerView: 2
          },

          1024: {
            slidesPerView: 3
          },
          1280: {
            slidesPerView: 4
          }
        }
      });
    });

  // big slider
  document.querySelectorAll('.big-slider-container').forEach(slider => {
    new Swiper(slider, {
      spaceBetween: 20,
      pagination: {
        el: '.big-slider-pagination',
        clickable: true,
        modifierClass: 'big-slider-pagination-',
        bulletClass:
          'big-slider-pagination-bullet sl-pag-bullet swiper-no-swiping',
        bulletActiveClass:
          'big-slider-pagination-bullet-active sl-pag-bullet-active'
      },
      navigation: {
        nextEl: slider.nextElementSibling,
        prevEl: slider.nextElementSibling.nextElementSibling,
        disabledClass: 'big-slider-nav-disabled'
      }
    });
  });
};
