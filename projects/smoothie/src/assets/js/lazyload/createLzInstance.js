import LazyLoad from 'vanilla-lazyload';

/** @type {import('vanilla-lazyload').ILazyLoadOptions} */
const defaultOptions = {
  elements_selector: '.lazy',
  to_webp: true
};

export default (o = defaultOptions) => new LazyLoad(o);
