import LazyLoad from 'vanilla-lazyload';

const lazyLoadOptions = {
  elements_selector: '.lazy',
  to_webp: true
};

export default () => new LazyLoad(lazyLoadOptions);
