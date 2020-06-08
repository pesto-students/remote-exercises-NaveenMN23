const deepCopyObject = (objToCopy) => {
  const outObj = Array.isArray(objToCopy) ? [] : {};
  if (typeof objToCopy !== "object" || objToCopy === null) {
    return objToCopy;
  }
  for (const [key, value] of Object.entries(objToCopy)) {
    outObj[key] = deepCopyObject(value);
  }
  return outObj;
};

export { deepCopyObject };
