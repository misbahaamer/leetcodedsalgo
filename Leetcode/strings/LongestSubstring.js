/*
340. Longest Substring with At Most K Distinct Characters
Medium

2111

64

Add to List

Share
Given a string s and an integer k, return the length of the longest substring of s that contains at most k distinct characters.

 

Example 1:

Input: s = "eceba", k = 2
Output: 3
Explanation: The substring is "ece" with length 3.
Example 2:

Input: s = "aa", k = 1
Output: 2
Explanation: The substring is "aa" with length 2.
*/

//slidins window
//[4,2,1,7,8,1,2,8,1,0]
function SlidingWindow1(s, k) {
  var soFar = {};

  let maxVal = Number.MIN_VALUE;
  let currentVal = 0;
  for (let i = 0; i < s.length; i++) {
    currentVal = currentVal + s[i];
    if (i >= k - 1) {
      maxVal = Math.max(maxVal, currentVal);
      currentVal = currentVal - s[i - (k - 1)];
    }
  }
  return maxVal;
}

//dynamically increasing/decreasing window size
//smallest suba rray given sum
function SlidingWindow2(s, k) {
  var soFar = {};

  let minWindowSize = Number.MAX_VALUE;
  let currentVal = 0;
  let winStart = 0;
  for (let winEnd = 0; winEnd < s.length; winEnd++) {
    currentVal = currentVal + s[winEnd];
    while (currentVal >= k) {
      minWindowSize = Math.min(minWindowSize, winEnd - winStart + 1);
      currentVal = currentVal - s[winStart];
      winStart++;
    }
  }
  console.log(minWindowSize);
  return minWindowSize;
}
//SlidingWindow2([4, 2, 1, 7, 8, 1, 2, 8, 1, 0], 8);

//dynamixc data
//[a,a,a,h,h,i,b,c]
function LongestSubstring(s, k) {
  var freq = {};
  let res = 0;
  let start = 0;
  let end = 0;

  while (end < s.length) {
    if (freq[s[end]] === undefined) {
      k--;
    }
    freq[s[end]] = end;
    while (k < 0) {
      if (freq[s[start]] === start) {
        delete freq[s[start]];
        k++;
      }
      start++;
    }
    res = Math.max(res, end - start + 1);
    end++;
  }

  console.log(res);
  return res;
}

LongestSubstring("aabacccac", 2);
