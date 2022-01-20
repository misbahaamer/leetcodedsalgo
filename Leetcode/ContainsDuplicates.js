const params = [1, 2, 3, 1];

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

function DupsSorted(params) {
  params.sort(function (a, b) {
    return a - b;
  });
  for (let index = 0; index < params.length; index++) {
    if (index > 0 && params[index] === params[index - 1]) {
      console.log(true);
      return;
    }
  }
  console.log(false);
}

DupsSorted(params);
