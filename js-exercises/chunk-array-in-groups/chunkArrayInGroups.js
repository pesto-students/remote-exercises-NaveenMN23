const chunkArrayInGroups = (array, chunkSize) => {
  const chunkedArrayInGroups = [];
  for (const item of array) {
    const tempChunkedArray = chunkedArrayInGroups[chunkedArrayInGroups.length - 1];
    if (!tempChunkedArray || tempChunkedArray.length === chunkSize) {
      chunkedArrayInGroups.push([item]);
    } else {
      tempChunkedArray.push(item);
    }
  }
  return chunkedArrayInGroups;
};

export {
  chunkArrayInGroups,
};
