/*
303. Range Sum Query - Immutable
Easy

1764

1578

Add to List

Share
Given an integer array nums, handle multiple queries of the following type:

Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.
Implement the NumArray class:

NumArray(int[] nums) Initializes the object with the integer array nums.
int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).
 

Example 1:

Input
["NumArray", "sumRange", "sumRange", "sumRange"]
[[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
Output
[null, 1, -1, -3]

Explanation
NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
numArray.sumRange(0, 2); // return (-2) + 0 + 3 = 1
numArray.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1
numArray.sumRange(0, 5); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3
*/

var NumArray = function(nums) {
    var prefixArray = new Array(nums.length);
   prefixArray[0] = nums[0];
   for (var index = 1; index < prefixArray.length; index++) {
       prefixArray[index] = prefixArray[index - 1] + nums[index];
   }
   this.prefixArray = prefixArray;
   this.nums = nums;
};

/** 
* @param {number} left 
* @param {number} right
* @return {number}
*/
NumArray.prototype.sumRange = function(i, j) {
    return this.prefixArray[j] - this.prefixArray[i] + this.nums[i];
};

/** 
* Your NumArray object will be instantiated and called as such:
* var obj = new NumArray(nums)
* var param_1 = obj.sumRange(left,right)
*/

/*
the key idea here is:
Sum from i to j = (sum from 0 to i) -(sum from 0 to j) + (nums[i]) 

so we use a prefix sum array that will precompute and store all the sums from 0 to someIndex.
*/

/**
* Your NumArray object will be instantiated and called as such:
* var obj = new NumArray(nums)
* var param_1 = obj.sumRange(i,j)
*/
