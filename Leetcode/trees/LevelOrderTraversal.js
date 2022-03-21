/*
103. Binary Tree Zigzag Level Order Traversal
Medium

5177

164

Add to List

Share
Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: [[3],[20,9],[15,7]]
Example 2:

Input: root = [1]
Output: [[1]]
Example 3:

Input: root = []
Output: []
*/
function TreeNode(val, left, right) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }

     var zigzagLevelOrder = function(root) {
        if (!root) {
            return [];
        }
        const q = [root];
        const res = [];
        
        let count = 0;

        while (q.length) {
            let len = q.length;
            if (count % 2 === 0) {
                res.push(q.map(x => x.val));
            }
            else{
                res.push(q.map(x => x.val).reverse());
            }
            count++;
            while (len--) {
                let node = q.shift();
                if (node.left) {
                    q.push(node.left)
                }
                if (node.right) {
                    q.push(node.right);
                }
            }
        }
        return res;
    };