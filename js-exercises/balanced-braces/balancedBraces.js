
function balancedBraces(args) { 
  const bracketsMap = new Map();
  bracketsMap.set(']','[');
  bracketsMap.set(')','(');
  bracketsMap.set('}','{');
  const closingBrackets = [...bracketsMap.keys()];
  const openingBrackets = [...bracketsMap.values()];
  const bracketsPresentInArgs = [];
  for(const item of args){ 
    if(openingBrackets.includes(item)) { 
      bracketsPresentInArgs.push(item);
    } else if(closingBrackets.includes(item)) { 
      let expectedBracket = bracketsMap.get(item);
      if(bracketsPresentInArgs.lastIndexOf(expectedBracket) === bracketsPresentInArgs.length - 1){ 
        bracketsPresentInArgs.pop();
      } else { 
      	return false;
      }
    }
  }
  return bracketsPresentInArgs.length > 0 ? false : true;
}

export {
  balancedBraces,
};
