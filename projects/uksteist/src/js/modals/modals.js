import Swal from 'sweetalert2/dist/sweetalert2';

/** @type {import('sweetalert2').SweetAlertOptions} */
const opts = {
  showConfirmButton: false,
  showClass: {
    popup: 'animate-fadeIn animate-duration-200'
  },
  hideClass: {
    popup: 'animate-fadeOut animate-duration-200'
  }
};

const swal = Swal.mixin(opts);

/** @type {import('sweetalert2').SweetAlertOptions} */
const opts1 = {
  template: '#modal-doc',
  customClass: { popup: 'docForm-container' }
};

/** @type {import('sweetalert2').SweetAlertOptions} */
const opts2 = {
  template: '#modal-doc-2',
  customClass: { popup: 'docForm2-container' },
  showClass: {
    backdrop: 'swal2-noanimation'
  }
};

export const docModalTrigger = {
  async showModal(name) {
    swal.fire(opts1);
    await this.$nextTick();
    this.$dispatch('docmodal-open', name);
  },
  showSecondModal() {
    swal.fire(opts2);
  },
  close() {
    swal.close();
  }
};

export const sourcesTrigger = {
  async showModal() {
    swal.fire(opts1);
    await this.$nextTick();
  },
  close() {
    swal.close();
  }
};
