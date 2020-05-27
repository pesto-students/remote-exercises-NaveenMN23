const animalSort = animals => {
    const sortedByName = animals.sort(function(el1, el2){
        return (el1.name < el2.name) ? -1 : ((el2.name < el1.name) ? 1 : 0)
     });
    const sortedByLegs = sortedByName.sort(function(el1, el2){
        return el1.numberOfLegs - el2.numberOfLegs;
    });  
    return sortedByLegs;
};

export { animalSort };
