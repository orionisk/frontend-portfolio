import MicroModal from 'micromodal/dist/micromodal';
import Swiper, { Navigation, Pagination, Lazy } from 'swiper';
import { createShowMoreBtn } from './createShowMoreBtn';
import { disableIosInputZoom } from './disableIosInputZoom';
import formInit from './formInit';
import inputsInit from './initInputs';
Swiper.use([Navigation, Pagination, Lazy]);

window.addEventListener('DOMContentLoaded', () => {
  localStorage.removeItem('settingsFormData');
  localStorage.removeItem('houseItem');

  MicroModal.init({
    awaitCloseAnimation: true
    // onShow: modal => console.info(`${modal.id} is shown`)
    // onClose: (modal, element) => MicroModal.close(modal.id)
    // disableScroll: true
  });

  const closeModal = selector =>
    document.querySelectorAll(selector).forEach(modal => {
      MicroModal.close(modal.id);
    });

  const success = () => {
    // MicroModal.close('modal-1');
    // MicroModal.close();
    closeModal('.modal.is-open');
    MicroModal.show('modal-done');
  };

  new Swiper('.mySwiper', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    pagination: {
      el: '.slider__count',
      type: 'fraction'
    },
    navigation: {
      nextEl: '.swiper-button-next-custom',
      prevEl: '.swiper-button-prev-custom'
    },
    preloadImages: false,
    lazy: {
      loadPrevNext: true,
      loadPrevNextAmount: 2
    },
    watchSlidesVisibility: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        centeredSlides: true,
        spaceBetween: 10
      },
      640: {
        slidesPerView: 2,
        slidesPerGroup: 2
      },
      768: {
        slidesPerView: 'auto',
        slidesPerGroup: 3
      }
    }
  });

  createShowMoreBtn('.house-show-more-btn', '.house__item.hidden');
  createShowMoreBtn('.recomend-show-more-btn', '.recomend__item.hidden');

  const mainForms = document.querySelectorAll('.main-form');
  mainForms.forEach(form => {
    inputsInit(form.querySelectorAll('input'));
    formInit(form, '/mailer/sender.php', success, success);
  });

  const settingsForm = document.querySelector('.settings-form');
  // const settingsFormBtn = settingsForm?.querySelector('.settings-form-btn');

  settingsForm?.addEventListener('submit', e => {
    e.preventDefault();

    const additionalOptions = [
      ...settingsForm.querySelectorAll('input[name=additional_options]:checked')
    ]
      .map(i => i.value)
      .join(', ');

    const fd = new FormData(settingsForm);
    fd.append('additional_options', additionalOptions);

    const settingsData = Object.fromEntries(fd);
    localStorage.setItem('settingsFormData', JSON.stringify(settingsData));
  });

  const houseItems = document.querySelectorAll('.house__item');
  houseItems.forEach(item => {
    const title = item.querySelector('h3');
    const btn = item.querySelector('.check-price');
    const span = item.querySelector('span');

    const content = title.textContent + ', ' + span.textContent;

    btn.addEventListener('click', () => {
      localStorage.setItem('houseItem', JSON.stringify({ houseItem: content }));
      // MicroModal.show('modal-form-2');
    });
  });

  disableIosInputZoom();

  // document.querySelectorAll('.modal__overlay').forEach(m => {
  //   m.addEventListener('mousedown', e => {
  //     e.stopPropagation();
  //     e.preventDefault();
  //     closeModal('.modal.is-open');
  //   });
  // });

  // document.querySelectorAll('.modal__container').forEach(m => {
  //   m.addEventListener('mousedown', e => {
  //     e.stopPropagation();
  //   });
  // });
});
