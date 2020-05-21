function splitStringByDelimiter(inputString, delimiter){
    return inputString.split(delimiter);
}
function addBigIntegers(inputString) {
    const splitByNewLineRegex = /\r?\n/;
    let stringSplittedByNewLine = splitStringByDelimiter(inputString, splitByNewLineRegex);
    let sumOfLastCharValueOfArrayElements = 0;
    let addedStringValue = "";
    while(stringSplittedByNewLine.length > 0){
      let lastCharValueOfSplittedStringArray = [];
      let tempStringArrayWithoutLastChar = [];
        for(const string of stringSplittedByNewLine){
          lastCharValueOfSplittedStringArray.push(string.substr(-1));
          if(string.length > 1){
            tempStringArrayWithoutLastChar.push(string.substr(0,string.length-1)); 
          }
        }
        stringSplittedByNewLine = []; 
      	stringSplittedByNewLine = tempStringArrayWithoutLastChar;
        if(sumOfLastCharValueOfArrayElements >= 10){
			let splittedCharValueToAdd = splitStringByDelimiter(sumOfLastCharValueOfArrayElements.toString(),"")[0];
          	lastCharValueOfSplittedStringArray.push(splittedCharValueToAdd) 
        }
      	sumOfLastCharValueOfArrayElements = sumOfPassedInputArray(lastCharValueOfSplittedStringArray);
		if(stringSplittedByNewLine.length > 0){
         	addedStringValue = (sumOfLastCharValueOfArrayElements.toString()[1] ? sumOfLastCharValueOfArrayElements.toString()[1] : sumOfLastCharValueOfArrayElements.toString()[0]) + addedStringValue; 
        }else{
          addedStringValue = sumOfLastCharValueOfArrayElements.toString() + addedStringValue;
        }
    }
  return addedStringValue;
}
function sumOfPassedInputArray(lastCharArrayOfSplittedStringArray){
    let tempSumOfLastCharValue = 0;
    for(const character of lastCharArrayOfSplittedStringArray){
        tempSumOfLastCharValue += parseInt(character)
    }
    return tempSumOfLastCharValue;
}

export { addBigIntegers };
