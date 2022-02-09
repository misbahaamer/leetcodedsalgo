/*
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

 

Example 1:


Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9
*/
/**
 * @param {number[]} height
 * @return {number}
 */

var trap = function (height) {
  if (height === null || height.length === 0) {
    return 0;
  }
  // leftMax[i] is the max height of block in height[0...i]
  let leftMax = new Array(height.length);
  // rightMax[i] is the max height of block in height[i...end]
  let rightMax = new Array(height.length);
  leftMax[0] = height[0];
  rightMax[height.length - 1] = height[height.length - 1];
  for (let i = 1; i < height.length; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  }
  for (let i = height.length - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i]);
  }
  let trapped = 0;
  for (let i = 1; i < height.length - 1; i++) {
    let waterLevel = Math.min(leftMax[i - 1], rightMax[i + 1]);
    // water level should be higher than block height for water to be trapped
    if (waterLevel > height[i]) {
      trapped += waterLevel - height[i];
    }
  }
  return trapped;
  // T.C: O(N)
  // S.C: O(N)
  // DP
};
var trap = function (heights) {
  if (heights === null || heights.length === 0) {
    return 0;
  }
  let trapped = 0,
    low = 0,
    high = heights.length - 1;
  let leftMax = 0,
    rightMax = 0;
  while (low < high) {
    if (heights[low] <= heights[high]) {
      // we know that there is wall in the right that is either equal to
      // or higher than our tallest wall in the left
      // that's why our index has moved so far and we are in this conditional
      // statement
      if (leftMax > heights[low]) trapped += leftMax - heights[low];
      else leftMax = heights[low];
      low++;
    } else {
      // we know that there is wall in the left that is either equal to
      // or higher than our tallest wall in the right
      // that's why our index has moved so far and we are in this conditional
      // statement
      if (rightMax > heights[high]) trapped += rightMax - heights[high];
      else rightMax = heights[high];
      high--;
    }
  }
  return trapped;
  // Two Pointer
  // Time Complexity: O(n)
  // Space Complexity: O(1)
};
