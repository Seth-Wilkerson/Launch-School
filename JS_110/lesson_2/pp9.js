let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let newSortedArr = arr.map(elem => {
  if (typeof elem[0] === 'string') {
    return elem.slice().sort();
  } else {
    return elem.slice().sort((a, b) => a - b);
  }
});

console.log(newSortedArr);
console.log(arr);