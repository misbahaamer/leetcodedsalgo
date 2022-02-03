/*
230. Kth Smallest Element in a BST
Medium

5577

110

Add to List

Share
Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

 

Example 1:


Input: root = [3,1,4,null,2], k = 1
Output: 1
*/
function KthSmallest(root, k) {
  let res;
  let counter = 0;
  let FindElement = function (root) {
    if (root) {
      FindElement(root.left);
      if (counter < k) {
        res = root.val;
        counter++;
        FindElement(root.right);
      }
    }
  };
  FindElement(root);
  return res;
}

KthSmallest([3, 1, 4, null, 2], 1);
