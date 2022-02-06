/*
234. Palindrome Linked List
Easy

7831

502

Add to List

Share
Given the head of a singly linked list, return true if it is a palindrome.

 

Example 1:


Input: head = [1,2,2,1]
Output: true
Example 2:


Input: head = [1,2]
Output: false
*/

//Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let len = lengthOfList(head);
    let prev = null, cur = head;
    for (let i = 0; i < Math.floor(len/2); i++) {
        cur = cur.next;
    }
    // Reverse the right half
    while (cur !== null) {
        let next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    // prev is the head of reversed right half
    let headOfRightHalf = prev;
    while (head && headOfRightHalf) {
        if (head.val !== headOfRightHalf.val) {
            return false;
        }
        head = head.next;
        headOfRightHalf = headOfRightHalf.next;
    }
    return true;
    // T.C: O(N)
    // S.C: O(1)
};

const lengthOfList = (head) => {
    let cur = head;
    let len = 0;
    while (cur !== null) {
        cur = cur.next;
        len++;
    }
    return len;
};
