const bizarreStringIncrementer = (inputString) => {
  const numberCheck = /\d+$/;
  const foundNumber = inputString.match(numberCheck);
  if (Boolean(foundNumber)) {
    const stringWithoutIntegerAtLast = inputString.slice(
      0,
      inputString.length - foundNumber.toString().length
    );
    const stringConvertedToInt = parseInt(foundNumber) + 1;
    const diffLength =
      foundNumber.toString().length - stringConvertedToInt.toString().length;
    let i = 0;
    let stringToAppend = "";
    while (i < diffLength) {
      stringToAppend += "0";
      i++;
    }
    return stringWithoutIntegerAtLast + stringToAppend + stringConvertedToInt;
  }
  return inputString + "1";
};

export { bizarreStringIncrementer };
