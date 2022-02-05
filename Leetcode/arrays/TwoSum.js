//given array of integeres nums and an integer target, return index of the two numbers that 
//add up to the target


const nums = [1, 11, 3, 6, 2];
const target = 5;

function TwoSum(nums, target) {
  let mem = {};
  for (let i = 0; i < nums.length; i++) {
    if (mem[nums[i]] === undefined) {
      mem[target - nums[i]] = i;
    } else {
      console.log([mem[nums[i]], i]);
      return;
    }
  }
}

TwoSum(nums, target);
