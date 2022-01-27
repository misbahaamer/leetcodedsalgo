/*
152. Maximum Product Subarray
Medium

10107

316

Add to List

Share
Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.

A subarray is a contiguous subsequence of the array.
*/
function MaxProdSubArray(nums) {
  if (nums.length === 1) return nums[0];

  let [min, max] = [1, 1];

  return nums.reduce((acc, num) => {
    [min, max] = [
      Math.min(num, min * num, max * num),
      Math.max(num, min * num, max * num),
    ];

    acc = Math.max(acc, max);
    console.log(acc);
    return acc;
  }, 0);
}

MaxProdSubArray([2, 3, -2, 4]);
