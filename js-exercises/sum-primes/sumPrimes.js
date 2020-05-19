function sumPrimes(endNumber) {
  let sum=0;
  if(endNumber < 2){
    return 0;
  }
  for(let i=2; i<=endNumber; i++){
    if(isPrime(i)){
      sum+=i;
    }
  }
  return sum;
}

function isPrime(input){
  for(let i=2; i<= Math.floor(input/2); i++){
    if(input%i === 0){
      return false;
    }
  }
  return true;
}

export {
  sumPrimes,
};
