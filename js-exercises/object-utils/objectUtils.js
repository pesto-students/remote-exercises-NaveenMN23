const map = (inputObject, ...callBack) => {
  return inputObject.map((item) => [
    callBack[0](item.name),
    callBack[1](item.salary),
  ]);
};

const filter = (inputObject, searchValue) => {
  return inputObject.filter((item) => item.salary >= searchValue);
};

const invert = (inputObject) => {
  const resultantObject = {};
  for (const [key, value] of Object.entries(inputObject)) {
    resultantObject[value] = resultantObject[value] || [];
    resultantObject[value].push(key);
  }
  return resultantObject;
};

const merge = (...inputObjects) => {
  return Object.assign({}, ...inputObjects);
};

const all = (inputArray, isBelowThreshold) => {
  return inputArray.every(isBelowThreshold);
};

const some = (inputArray, isBelowThreshold) => {
  return inputArray.some(isBelowThreshold);
};

export { map, filter, invert, merge, all, some };
