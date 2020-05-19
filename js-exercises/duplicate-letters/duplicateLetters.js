
function duplicateLetters(...args) {
  let returnArray = [args.length];
  let j=0;
  for(let arg of args){
    let maxRepeated = 1;
    let sortedString = arg.split("").sort();
    if(sortedString){
      let count = 1;
      for(let i=1; i<sortedString.length; i++){
        sortedString[i] === sortedString[i-1] ? count++: count=1;
        maxRepeated = maxRepeated < count ? count : maxRepeated;
      }
    }
    returnArray[j++] = maxRepeated === 1 ? false: maxRepeated;
  }
  if(args.length > 1){
    return returnArray;
  }
  return returnArray[0];
}

export {
  duplicateLetters,
};
