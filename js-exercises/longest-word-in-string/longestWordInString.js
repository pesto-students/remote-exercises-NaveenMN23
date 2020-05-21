function longestWordInString(inputString) {
  return inputString.split(" ").reduce(
    (maxLengthWord,currentWord) => {
      if(currentWord.length > maxLengthWord.length){
        return currentWord;
      }else{
        return maxLengthWord;
      }
    },"");
}

export { longestWordInString };
