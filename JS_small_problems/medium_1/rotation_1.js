/*
  input:
    array
  ouput:
    copy of the input array with the first element rotated to the end
  
  Does it need to be a deep copy?
  if the length is 0 return []
  if the type is not array return undefined

  make a copy of the array
  remove the first element of copied array
  save that element
  add it to the end of the copied array
  return the copied array
*/

function rotateArray(arr) {
  if (!Array.isArray(arr)) {
    return undefined;
  }

  if (arr.length < 1) {
    return [];
  }

  let copyOfArr = JSON.parse(JSON.stringify(arr));

  let firstElement = copyOfArr.shift();
  copyOfArr.push(firstElement);

  return copyOfArr;
}


console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]