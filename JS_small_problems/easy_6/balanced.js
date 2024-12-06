function isBalanced(str) {
  let balance = 0;
  let countOfOpen = 0;
  let countOfClose = 0;


  str.split('').forEach(char => {
    if (char === '(') {
      countOfOpen += 1;
      balance += 1;
    } else if (char === ')') {
      if (countOfOpen === 0 || countOfClose >= countOfOpen) balance = 1000000;

      countOfClose += 1;
      balance -= 1;
    }
  });

  return balance === 0 ? true : false;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);