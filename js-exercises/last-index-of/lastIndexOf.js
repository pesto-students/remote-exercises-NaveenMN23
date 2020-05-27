
function lastIndexOf(...args) {
  const searchValue = args[0];
  const inputArray = args[1];
  let elementFound = -1;
  for(const [index, item] of inputArray.entries()){
    if(item === searchValue){
      elementFound = index;
    }
  }
  return elementFound;
}

export {
  lastIndexOf,
};
