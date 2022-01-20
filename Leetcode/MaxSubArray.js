/*
given an integer array nums, find the contigous subarray containing at least one nmumber which has the largest sum and retrn its sum
*/

function MaxSubArray(nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  //keep track of max value, accumulated number
  let maxValue = nums[0];
  let accNum = nums[0];

  //go through each number
  for (let i = 0; i < nums.length; i++) {
    let calc = Math.max(nums[i], accNum + nums[i]);

    if (calc > maxValue) {
      maxValue = calc;
    }
    accNum = calc;
  }
  //check if current number is Big or take previous stored number and use that
  //check if my accumulated number is bigger than maxvalye, if so replace it, accumulatednumber  = calculated value

  return maxValue;
}
