function diffArray(...inputArrays) {
  const inputArray1 = inputArrays[0];
  const inputArray2 = inputArrays[1];
  let diffArray = [];
  for(let item of inputArray1){
    if(inputArray2.indexOf(item) === -1){
      diffArray.push(item);
    }
  }
  for(let item of inputArray2){
    if(inputArray1.indexOf(item) === -1){
      diffArray.push(item);
    }
  }
  return diffArray;
}

export {
  diffArray,
};
