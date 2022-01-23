/*
given a string s containing characters ()[]{} determine if the input string is valid
Stack problem
*/

function IsValid(str) {
  const openClose = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (openClose[str[i]] === undefined) {
      stack.push(str[i]);
    } else {
      if (openClose[str[i]] === stack[stack.length - 1]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  console.log(stack.length !== 0);
  return stack.length !== 0;
}

IsValid("(]");
Longest("(()");

/*
Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.
*/

function Longest(s) {
  let longest = 0;
  let stack = [-1];

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (char === "(") {
      stack.push(i);
      continue;
    }

    stack.pop();
    if (!stack.length) stack.push(i);
    else longest = Math.max(i - stack[stack.length - 1], longest);
  }

  return longest;
}
