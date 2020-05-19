function sumFibs(input) {
  let previousNumber = 0;
    let currentNumber = 1;
    let sum = 0;
    while (currentNumber <= input) {
        if (currentNumber % 2 !== 0) {
            sum += currentNumber;
        }
        currentNumber += previousNumber;
        previousNumber = currentNumber - previousNumber;
    }
    return sum;
}

export {
  sumFibs,
};
