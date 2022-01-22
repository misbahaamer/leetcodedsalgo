/*
given interger array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]
return an answer on O(t) without division

*/

//[1,2,3,4] => [24,12,8,6]

function ProductOfArrayExceptSelf(nums) {
    let sol = [];
    let leftPrd = [];
    let rightPrd = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (leftPrd.length === 0) {
        leftPrd.push(1);
        }else{
            leftPrd.push(leftPrd[i-1] * nums[i-1]);
        }
        
    }
    for (let i = nums.length - 1; i > -1; i--) {
        if (rightPrd.length === 0) {
            rightPrd.push(1);
            }else{
                rightPrd.unshift(rightPrd[0] * nums[i+1]);
            }
        
    }
    for (let i = 0; i < leftPrd.length; i++) {
        sol.push(leftPrd[i] * rightPrd[i]);
        
    }
    console.log(sol);
    return sol;
}

ProductOfArrayExceptSelf([1,2,3,4]);