function alternatingCharacters(inputArray) {
    const noOfDeletions = [];
    for(const item of inputArray){
        const filteredAlternateCharacterArray = alternatingCharactersFiltered(item);
        noOfDeletions.push(item.length - filteredAlternateCharacterArray.length);
    }
    return noOfDeletions;
}

function alternatingCharactersFiltered(inputString){
    const charArray = inputString.split("");
    let previousValue = charArray[0];
    const filteredAlternateCharacterArray = charArray.filter((character, _) =>{
        if(character !== previousValue){
            previousValue = character;
            return character;
        }
    });
    return [charArray[0], ...filteredAlternateCharacterArray];
}

export { alternatingCharacters };
