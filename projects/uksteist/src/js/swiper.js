import Swiper, { Navigation, EffectFade, Lazy } from 'swiper';
import PhotoSwipe from 'photoswipe';
import PhotoSwipeLightbox from 'photoswipe/lightbox';

Swiper.use([Navigation, EffectFade, Lazy]);

const createSlider = ref => {
  const swiper = new Swiper(ref, {
    passiveListeners: false,
    speed: 500,
    effect: 'fade',
    preloadImages: false,
    lazy: {
      loadPrevNext: true
    },
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: '.infra-swiper-next',
      prevEl: '.infra-swiper-prev'
    }
  });
  //

  const photo_swipe_options = {
    gallery: '#my-gallery',
    pswpModule: PhotoSwipe,
    children: 'a',
    loop: false,
    showHideAnimationType: 'zoom' /* options: fade, zoom, none */,
    /* ## Hiding a specific UI element ## */
    zoom: false,
    close: true,
    counter: false,
    arrowKeys: false,
    /* ## Options ## */
    wheelToZoom: true /* deafult: undefined */
  };

  const lightbox = new PhotoSwipeLightbox(photo_swipe_options);
  lightbox.init();
  lightbox.on('change', () => {
    const { pswp } = lightbox;
    swiper.slideTo(pswp.currIndex, 0, false);
  });

  lightbox.on('closingAnimationStart', () => {
    const { pswp } = lightbox;
    swiper.slideTo(pswp.currIndex, 0, false);
  });

  // lightbox.addFilter('placeholderSrc', (placeholderSrc, content) => {
  //   console.log(placeholderSrc, content);
  //   // return placeholderSrc;
  // });

  return swiper;
};

//

export const infraSwiper = {
  init() {
    const sw = createSlider(this.$refs.swiper);
    this.activeIndex = sw.activeIndex;
    this.slideTo = i => sw.slideTo(i);

    sw.on('slideChange', s => {
      this.activeIndex = s.activeIndex;
    });

    this.length = sw.slides.length;
  }
};
