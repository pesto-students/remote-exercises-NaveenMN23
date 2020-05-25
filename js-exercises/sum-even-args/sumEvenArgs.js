const sumEvenArgs = (...args) => {
  let sumOfEvenArgs = 0;
  for(const item of args){
    if(parseInt(item) % 2 === 0){
      sumOfEvenArgs += parseInt(item);
    }
  }
  return sumOfEvenArgs;
};

export { sumEvenArgs };