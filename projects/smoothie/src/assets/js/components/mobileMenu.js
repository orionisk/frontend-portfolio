import Swal from 'sweetalert2/src/sweetalert2';

const template = '#mobile-menu';
/** @type {import('sweetalert2').SweetAlertOptions} */
const opts = {
  template,
  returnFocus: false,
  showConfirmButton: false,
  position: 'center-left'
};

const swal = Swal.mixin(opts);
const t = { template };

export const mobileMenu = {
  opts: {},
  showMenu(o = {}) {
    swal.fire({ ...t, ...this.opts, ...o });
  },
  close(o = {}) {
    swal.close({ ...this.opts, ...o });
  }
};
