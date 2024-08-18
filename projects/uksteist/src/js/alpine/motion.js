import { animate, inView } from 'motion';

/** @param {import('alpinejs').Alpine} Alpine */
export default function (Alpine) {
  Alpine.directive('motion', (el, { modifiers, expression }, { evaluate }) => {
    const opts = evaluate(expression);

    let fn;

    if (modifiers.includes('intersect')) {
      const { box = el, a, o = {} } = opts;
      fn = inView.bind(null, box, () => animate(el, ...a), o);
    } else {
      fn = () => animate(el, ...opts);
    }

    fn();
  });
}
