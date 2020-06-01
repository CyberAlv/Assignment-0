class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;
    let start = 0;
    let middle;
    let finish = nums.length-1;

    while(start <= finish)
    {
      middle =  Math.floor((start + finish) / 2);

      if( nums[middle] == target)
        return true;
     else{ 
        if( target < nums[middle] )
              finsih = middle -1;
            else
                start = middle +1;
     }
    }
    return false;

  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;