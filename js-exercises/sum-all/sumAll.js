function sumAll(args) {
  let max = Math.max(...args);
  let min = Math.min(...args);
  return (max*(max+1) - min*(min-1))/2;
}

export {
  sumAll,
};
