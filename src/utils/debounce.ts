export const debounce = <T extends any[], R>(
  func: (...args: T) => R,
  delay: number = 300
) => {
  let timeout: number;
  return (...args: T) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};
