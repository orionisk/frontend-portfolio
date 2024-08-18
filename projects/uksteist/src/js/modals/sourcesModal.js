import Swal from 'sweetalert2/dist/sweetalert2';
import { LazyLoadInstance } from '../main';

/** @type {import('sweetalert2').SweetAlertOptions} */
const opts = {
  template: '#modal-sources',
  showConfirmButton: false,
  customClass: { popup: 'sourcesModal-wrapper' },
  showClass: {
    popup: 'animate-fadeIn animate-duration-200'
  },
  hideClass: {
    popup: 'animate-fadeOut animate-duration-200'
  },
  willOpen: () => {
    LazyLoadInstance.update();
  }
};

const swal = Swal.mixin(opts);

export const sourcesModalTrigger = {
  showModal() {
    swal.fire(opts);
  },
  close() {
    swal.close();
  }
};
