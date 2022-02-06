/*
338. Counting Bits
Easy

5486

269

Add to List

Share
Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

 

Example 1:

Input: n = 2
Output: [0,1,1]
Explanation:
0 --> 0
1 --> 1
2 --> 10
*/
function CountingBits(n) {
    let dp = new Array(n +1).fill(0);
    for (let i = 1; i < n+1; i++) {
        if(i%2)   {
            dp[i] = dp[i-1] + 1;
        }
        else{
            dp[i] = dp[i/2]
        }
        
    }
    return dp;
}
