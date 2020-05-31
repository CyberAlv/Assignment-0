function countOfAllNumbersSmallerThanTarget(nums, target) {
  // Insert code here;
  let count = 0;
  for(let x = 0; x < nums.length; x++){
    if(nums[x] < target){
      count++;
    }
  }
  return count;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;