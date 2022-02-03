/*
given an integer array nums, return true if any value appears twice or return false if any element is distinct
*/

const params = [1, 2, 3, 1];

//O(T), O(M)
function Dups(params) {
  let mem = {};
  for (let index = 0; index < params.length; index++) {
    if (mem[params[index]] === undefined) {
      mem[params[index]] = index;
    } else {
      console.log(true);
      return;
    }
  }
  console.log(false);
}

//O(T), O(1)
function DupsSorted(params) {
  params.sort(function (a, b) {
    return a - b;
  });
  for (let index = 0; index < params.length; index++) {
    if (index > 0 && params[index] === params[index - 1]) {
      console.log(true);
      return true;
    }
  }
  console.log(false);
  return false;
}

DupsSorted(params);
