/*
83. Remove Duplicates from Sorted List
Easy

4141

176

Add to List

Share
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

 

Example 1:


Input: head = [1,1,2]
Output: [1,2]
Example 2:


Input: head = [1,1,2,3,3]
Output: [1,2,3]
*/
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var deleteDuplicates = function (head) {
  let dummy = new ListNode(Number.MIN_VALUE);
  dummy.next = head;
  let prev = dummy;
  let curr = head;
  while (curr) {
    if (curr.val === prev.val) {
      prev.next = curr.next;
      curr = curr.next;
    } else {
      prev = curr;
      curr = curr.next;
    }
  }
  return dummy.next;
};
