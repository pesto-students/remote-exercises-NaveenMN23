const handler = {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    } else if (typeof prop !== "symbol") {
      const index = Number(prop);
      if (index < 0) {
        return target[index + target.length];
      }
      return target[index];
    }
  },
  set(target, prop, newVal) {
    const index = Number(prop);
    if (index < 0) {
      target[index + target.length] = newVal;
      return true;
    }
    target[index] = newVal;
    return true;
  },
};
const negativeIndex = (input) => {
  if (!Array.isArray(input)) {
    throw new TypeError("Only arrays are supported");
  }
  return new Proxy(input, handler);
};

export { negativeIndex };
