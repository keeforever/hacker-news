import { useEffect } from "react";

const useDebounce = (callback, ms, ...dependencies) => {
  useEffect(() => {
    let timer = setTimeout(callback, ms);
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...dependencies]);

  return null;
};

export default useDebounce;
