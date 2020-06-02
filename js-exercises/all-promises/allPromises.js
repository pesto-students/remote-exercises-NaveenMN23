const allPromises = async (promises) => {
  const result = [];
  for (const item of promises) {
    if (item instanceof Promise) {
      await Promise.resolve(item).then((el) => result.push(el));
    } else {
      result.push(item);
    }
  }
  return new Promise((resolve) => resolve(result));
};

export { allPromises };
