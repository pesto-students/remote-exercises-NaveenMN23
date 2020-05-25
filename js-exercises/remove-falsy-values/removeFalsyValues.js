
function removeFalsyValues(array) {
  const removedFalsyValues = [];
  for(const item of array){
    if(Boolean(item)){
      removedFalsyValues.push(item);
    }
  }
  return removedFalsyValues;
}

export {
  removeFalsyValues,
};
