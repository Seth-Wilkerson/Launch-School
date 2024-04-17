let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

let newArr = myArray.map((elem) => elem % 2 === 0 ? 'even' : 'odd');

console.log(newArr);

/////////////////////////////////////////////////////////
let findIntegers = (arr) => {
  return arr.filter((elem) => Number.isInteger(elem));
};

let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(things);
console.log(integers); // => [1, 3, -4]

/////////////////////////////////////////////////////////
let sumOfSquares = function(arr) {
  return arr.reduce((accum, elem) => accum + (elem * elem), 0);
}

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83

/////////////////////////////////////////////////////////
function oddLengths(arr) {
  return arr.reduce(function(accum, elem) {
    elemLen = elem.length;

    if (elemLen % 2 !== 0) {
      accum.push(elemLen);
    }

    return accum;
  }, []);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]