function curry(funcToTransform) {
  return function curried(...args) {
    if (args.length >= funcToTransform.length) {
      return funcToTransform.apply(this, args);
    }
    return function (...nextArgs) {
      return curried.apply(this, args.concat(nextArgs));
    };
  };
}

export { curry };
