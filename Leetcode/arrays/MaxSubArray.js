/*
given an integer array nums, find the contigous subarray containing at least one nmumber which has the largest sum and retrn its sum
*/
//[-2,1,-3,4,-1,2,1,-5,4]
//O(T), O(1)
function MaxSubArray(nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  if (nums.length === 1) {
    return nums[0];
  }

  //keep track of max value, accumulated number
  let maxValue = nums[0];
  let currSum = 0;
    
  for (let i = 0; i < nums.length; i++) {
    if(currSum < 0){
       currSum = 0;
       }
    currSum =currSum +  nums[i];
      maxValue = Math.max(maxValue, currSum);
  }
    return maxValue;
  
}

MaxSubArray([1,2,1]);
