function minima(noOfElements, inputArray) {
  let index = 0;
  while (index < inputArray.length - 1) {
    if (inputArray[index] > inputArray[index + 1]) {
      const temp = inputArray[index];
      inputArray[index] = inputArray[index + 1];
      inputArray[index + 1] = temp;
      index = -1;
    }
    index += 1;
  }
  return inputArray.slice(0, noOfElements);
}

export { minima };
