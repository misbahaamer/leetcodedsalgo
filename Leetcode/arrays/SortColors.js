/*75. Sort Colors
Medium

9330

405

Add to List

Share
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

 

Example 1:

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Example 2:

Input: nums = [2,0,1]
Output: [0,1,2]
*/

var sortColors = function (nums) {
  let [l, r, t] = [0, nums.length - 1, nums.length - 1];
  while (l <= r) {
    let curr = nums[r];
    if (curr == 0) {
      swap(nums, l++, r);
    } else if (curr == 2) {
      swap(nums, r--, t--);
    } else {
      r--;
    }
  }
};
const swap = (nums, a, b) => {
  let temp = nums[a];
  nums[a] = nums[b];
  nums[b] = temp;
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));
