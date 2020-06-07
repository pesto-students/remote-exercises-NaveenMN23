const aperture = (num, array) => {
  const len = array.length;
  if (len < num || num <= 0) {
    return [];
  }
  const result = [...Array(len - (num - 1))].map((_, i) =>
    array.slice(i, num + i)
  );
  return result;
};

export { aperture };
