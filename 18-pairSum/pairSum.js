function pairSum(nums, target) {
  // Insert code here;
  if (nums.length<=1){
    throw "Array must have a length greater than 1";

  }
  for(let i = 0; i < nums.length; i++){
      for(let j = nums.length; j > i; j--){
        if (nums[i] + nums[j] == target)
        return true;
      }
    }
  return false;
}
}

// Do not edit this line;
module.exports = pairSum;