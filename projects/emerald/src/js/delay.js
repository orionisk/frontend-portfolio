const delay = (fn, ms = 0) => {
  let timer = 0;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(fn.bind(this, ...args), ms);
  };
};

export default delay;
