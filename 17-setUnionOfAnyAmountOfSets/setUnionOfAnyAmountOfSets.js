function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  let anySet= new Set();
  for (let sets of args){
    for (let num of sets){
      anySet.add(num);
    }
  }
    return anySet;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;