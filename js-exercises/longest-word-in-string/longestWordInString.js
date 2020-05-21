function longestWordInString(inputString) {
  return inputString.split(" ").sort(function(currentSubString,nextSubString) {return nextSubString.length - currentSubString.length;})[0];
}

export { longestWordInString };
