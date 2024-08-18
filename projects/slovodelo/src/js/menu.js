export const createMenu = (menuCn, burgerCn, overlayCn) => {
  const burger = document.querySelector(burgerCn);
  const menu = document.querySelector(menuCn);
  const overlay = document.querySelector(overlayCn);

  if (!burger || !menu || !overlay) return;

  burger.addEventListener('click', () => {
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
    burger.classList.toggle('active');
  });

  overlay.addEventListener('click', () => {
    menu.classList.remove('active');
    overlay.classList.remove('active');
    burger.classList.remove('active');
  });
};
