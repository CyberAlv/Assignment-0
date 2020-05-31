function sumOfAllEvenNumbers(nums) {
  // Insert code here;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0){ 
    sum = sum + nums[i];
    }
  }
  return sum;
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;