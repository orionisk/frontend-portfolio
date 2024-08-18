import createPopper from './createPopper';

export const initForms = () => {
  const forms = document.querySelectorAll('.products-filter-form');

  forms.forEach(form => {
    const btn = form.querySelector('.filter-btn');
    const dropdown = form.querySelector('.filter-dropdown');

    createPopper(btn, dropdown, {
      placement: 'bottom-start'
    });
    form.oninput = () => btn.classList.add('changed');
    form.onreset = () => btn.classList.remove('changed');
  });
};
