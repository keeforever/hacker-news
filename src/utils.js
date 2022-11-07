const debounce = (callback, ms) => {
  /*
    every call
    clear last timer
    set newer timer
  */
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(callback.apply(this,args), ms);
  };
};

export { debounce };
