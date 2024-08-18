export const createShowMoreBtn = (btnSl, elementsSl) => {
  const btn = document.querySelector(btnSl);
  const elements = document.querySelectorAll(elementsSl);

  btn?.addEventListener('click', e => {
    e.currentTarget.classList.add('active');
    elements.forEach(item => item.classList.add('active'));
  });
};
