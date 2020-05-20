function cacheFunction(callBack) {
  let cachedFunctions = {};
  return function (cachedFunction){
    return cachedFunction in cachedFunctions ? cachedFunctions[cachedFunction] : cachedFunctions[cachedFunction] = callBack(cachedFunction);
  }
}

export {
  cacheFunction,
};
