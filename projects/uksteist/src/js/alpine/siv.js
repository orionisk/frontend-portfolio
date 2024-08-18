import scrollIntoView from 'smooth-scroll-into-view-if-needed';

const siv = (target, options = {}) => {
  if (!target) throw new Error('scroll target not found');

  let el;
  if (typeof target === 'string') {
    el = document.querySelector(target);
  }
  if (target instanceof HTMLElement) {
    el = target;
  }
  scrollIntoView(el, options);
};

export default function (Alpine) {
  Alpine.magic('scroll', () => siv);
}
