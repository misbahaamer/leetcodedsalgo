/*
252. Meeting Rooms
Easy

1273

63

Add to List

Share
Given an array of meeting time intervals where intervals[i] = [starti, endi], determine if a person could attend all meetings.

 

Example 1:

Input: intervals = [[0,30],[5,10],[15,20]]
Output: false
Example 2:

Input: intervals = [[7,10],[2,4]]
Output: true
*/
var canAttendMeetings = function (intervals) {
  if (intervals.length === 0) {
    return true;
  }
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < intervals[i - 1][1]) {
      return false;
    }
  }
  return true;
  // T.C: O(Nlog(N))
  // S.C: O(1)
};
