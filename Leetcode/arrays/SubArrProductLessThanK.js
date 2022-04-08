/*
713. Subarray Product Less Than K
Medium

3788

131

Add to List

Share
Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.

 

Example 1:

Input: nums = [10,5,2,6], k = 100
Output: 8
Explanation: The 8 subarrays that have product less than 100 are:
[10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.
Example 2:

Input: num
*/
var numSubarrayProductLessThanK = function (nums, k) {
  let [l, r, res, prod] = [0, 0, 0, 1];
  for (r; r < nums.length; r++) {
    prod *= nums[r];
    if (prod >= k) {
      while (prod >= k && l <= r) {
        prod /= nums[l];
        l++;
      }
    }
    res = res + r - l + 1;
  }

  return res;
};

numSubarrayProductLessThanK([10, 5, 2, 6], 100);
