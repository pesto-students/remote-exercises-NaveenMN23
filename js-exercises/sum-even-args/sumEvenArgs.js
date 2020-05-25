const sumEvenArgs = (...args) => {
  let sum = 0;
  for(const item of args){
    if(parseInt(item) % 2 === 0){
      sum += parseInt(item);
    }
  }
  return sum;
};

export { sumEvenArgs };