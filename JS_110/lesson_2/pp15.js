let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

arr.sort((a, b) => {
  return a.reduce((accum, num) => (num % 2 !== 0) ? accum + num : accum, 0) - b.reduce((accum, num) => (num % 2 !== 0) ? accum + num : accum, 0);
});

console.log(arr);