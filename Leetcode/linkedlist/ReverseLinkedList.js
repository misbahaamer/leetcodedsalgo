/*
206. Reverse Linked List
Easy

10427

179

Add to List

Share
Given the head of a singly linked list, reverse the list, and return the reversed list.

 

Example 1:


Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
Example 2:


Input: head = [1,2]
Output: [2,1]
Example 3:

Input: head = []
Output: []
*/

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
//O(T), O(1) iterative
  var reverseList = function(head) {
    let curr = head;
    let prev = null;
    let nxt;

    while (curr) {
        nxt = curr.next;
        curr.next = prev;
        prev=curr;
        curr = nxt;
    }
    return prev;
};

//O(T), O(m) recursive
var reverseListRecursively = function(head) {
    if (head === null) {
        return null;
    }
    let newHead = head;
    if (head.next) {
        newHead = reverseListRecursively(head.next);
        head.next.next = head;
    }
    head.next = null;
    return newHead;
};