function countOfAllBooleansAndStrings(arr) {
  // Insert code here;
  let count = 0;
   for(x = 0; x < arr.length; x++){
      if(arr[x] == true || arr[x] == false || typeof arr[x]){
        count++;
      }
   }
   return count;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;