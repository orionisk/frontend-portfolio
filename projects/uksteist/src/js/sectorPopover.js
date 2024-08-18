import tippy, { createSingleton } from 'tippy.js';

export const initSectorPopover = (selector, attribute) => {
  const t = tippy(selector, {
    content: ref => {
      const id = ref.getAttribute(attribute);
      const template = document.getElementById(id);
      return template?.innerHTML;
    }
  });

  createSingleton(t, {
    theme: 'main',
    appendTo: ref => ref.parentNode.parentNode,
    allowHTML: true,
    delay: [200, 300],
    offset: [0, 0],
    interactive: true,
    moveTransition: 'transform 0.2s ease-out',
    arrow: false
    // placement: 'auto'
  });
};
