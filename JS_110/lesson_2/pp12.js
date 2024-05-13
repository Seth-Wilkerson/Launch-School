const arr = [
  ['b', 'c', 'a'],
  ['blue', 'black', 'green'],
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

const arrCopy = JSON.parse(JSON.stringify(arr));

arrCopy[0] = 'hi';
arrCopy[1][0] = 'hello';

console.log(arr);
console.log(arrCopy);