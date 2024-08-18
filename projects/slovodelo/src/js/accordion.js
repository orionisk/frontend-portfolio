const clearActive = items =>
  items.forEach(item => {
    if (!item.classList.contains('active')) return;
    const accContent = item.querySelector('.faq-item__content');

    item.classList.remove('active');
    accContent.style.maxHeight = null;
  });

export const createAccordion = cn => {
  const accHeads = document.querySelectorAll(cn);

  accHeads.forEach(item => {
    const accContent = item.querySelector('.faq-item__content');
    const title = item.querySelector('.faq-item__title');
    accContent.style.maxHeight = null;

    title.addEventListener('click', () => {
      if (!item.classList.contains('active')) {
        clearActive(accHeads);
        item.classList.add('active');
        accContent.style.maxHeight = accContent.scrollHeight + 'px';
      } else {
        item.classList.remove('active');
        accContent.style.maxHeight = null;
      }
    });
  });
  return accHeads;
};
