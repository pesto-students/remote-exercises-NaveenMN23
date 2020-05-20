const flipArgs = (callback) => {
    return function(...inputArray){
        return callback(inputArray.reverse());
    }
}

export{
    flipArgs,
};