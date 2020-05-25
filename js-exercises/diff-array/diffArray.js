function diffArray(...inputArrays) {
  const inputArray1 = inputArrays[0];
  const inputArray2 = inputArrays[1];
  const differenceArray = [];
  for(const item of inputArray1){
    if(inputArray2.indexOf(item) === -1){
      differenceArray.push(item);
    }
  }
  for(const item of inputArray2){
    if(inputArray1.indexOf(item) === -1){
      differenceArray.push(item);
    }
  }
  return differenceArray;
}

export {
  diffArray,
};
