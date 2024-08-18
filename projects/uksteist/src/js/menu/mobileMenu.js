import Swal from 'sweetalert2/dist/sweetalert2';

/** @type {import('sweetalert2').SweetAlertOptions} */
const opts = {
  template: '#menu-slide',
  returnFocus: false,
  // showCloseButton: true,
  showConfirmButton: false,
  position: 'center-right',
  customClass: { popup: 'menu-slide', container: 'menu-slide-container menu-slide-backdrop' },
  showClass: {
    popup: 'animate-slideInRight animate-faster'
  },
  hideClass: {
    popup: 'animate-slideOutRight animate-faster'
  }
};

const swal = Swal.mixin(opts);

export const mobileMenuTrigger = {
  showMenu() {
    swal.fire(opts);
  }
};

export const mobileMenu = {
  showMenu() {
    swal.fire(opts);
  },
  scroll(el) {
    this.close();
    this.$scroll(el, { block: 'start' });
  },
  close() {
    swal.close();
  }
};
