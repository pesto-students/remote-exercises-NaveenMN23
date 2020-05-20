const limitFunctionCallCount = (callBack, noOfTimesToBeExecuted) => {
  let noOfTimesAlreadyExecuted = 0;
  return function(...input){
    return noOfTimesAlreadyExecuted++ === noOfTimesToBeExecuted ? null : callBack(...input);
  }
};

export {
  limitFunctionCallCount,
};
