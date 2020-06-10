const handler = {
  get(target, prop) {
    if (prop === "length") {
      return target.length;
    }
    if (prop === "toString") {
      return function () {
        return target.toString();
      };
    }
    const index = Number(prop);
    if (index < 0) {
      const actualIndex = index + target.length;
      return target[actualIndex];
    }
    return target[index];
  },
  set(target, prop, newVal) {
    const index = Number(prop);
    if (index < 0) {
      const actualIndex = index + target.length;
      target[actualIndex] = newVal;
      return true;
    }
    target[index] = newVal;
    return true;
  },
};
const negativeIndex = (input) => {
  if (!Array.isArray(input)) {
    throw new TypeError("/Only arrays are supported/");
  }
  const result = new Proxy(input, handler);
  return result;
};

export { negativeIndex };
