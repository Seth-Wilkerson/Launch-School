let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let newSortedArr = arr.map(elem => {
  if (typeof elem[0] === 'string') {
    return elem.slice().sort().reverse();
  } else {
    return elem.slice().sort((a, b) => b - a);
  }
});

console.log(newSortedArr);
console.log(arr);