function oddities(arr) {
  let oddArr = [];

  for (let idx = 0; idx < arr.length; idx += 2) {
    oddArr.push(arr[idx]);
  }

  return oddArr;
}

function even(arr) {
  let evenArr = [];

  arr.forEach(function (elem, idx) {
    if (idx % 2 !== 0) {
      evenArr[evenArr.length] = elem;
    }
  });

  return evenArr;
}



console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

console.log(even([2, 3, 4, 5, 6])); // logs [3, 5]
console.log(even([1, 2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(even(["abc", "def"])); // logs ['def']
console.log(even([123])); // logs []
console.log(even([])); // logs []