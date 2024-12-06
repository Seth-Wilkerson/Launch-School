/*
  input:
    3 numbers representing the length of each side of a triangle
  output:
    'equilateral', 'isosceles', 'scalene', or 'invalid'
    based on criteria:

    Equilateral: All three sides are of equal length.
    Isosceles: Two sides are of equal length, while the third is different.
    Scalene: All three sides are of different lengths.

    To be a valid triangle, 
    the sum of the lengths of the two shortest sides must be greater than the length of the longest side, 
    and every side must have a length greater than 0. 
    If either of these conditions is not satisfied, the triangle is invalid.

    if all three sides are equal then Equilateral except when invalid conditions
    if two sides are eqaul then Isosceles except when invalid conditions

    first check if triangle is invalid
    then check if each side is equal
    or two
    or none

    is invalid?
    dealing with 3 numbers so make a list and sort it in asc
    that will give you the smallest to largest numbers
    check if the first two elements are greater than the 3rd
    and that each element is greater than 0 (every)

    collect triangle array
    is triangle invalid?
      if so return invalid
    not
    check all sides equal?
    two sides equal?
    all sides different

    a = b and b = c

    a = b and c !== b  or  b = c and c !== a

    a !== b and b !== c and c !== a

    get the count of each occurence in the list
    if count of one is 3
    or 2
    or all 1
    then do the correct response
*/

function isValid(triArr) {
  triArr.sort((a, b) => a - b);

  if (((triArr[0] + triArr[1]) > triArr[2]) && triArr.every(ele => ele > 0)) {
    return true;
  }

  return false;
}

console.log(isValid([3,3,3])); // true
console.log(isValid([3,4,5])); // true
console.log(isValid([3,3,0])); // false
console.log(isValid([3,1,1])); // false

function triangle(a, b, c) {
  let triArr = [a, b, c];

  if (!isValid(triArr)) {
    return 'invalid';
  } else if ((a === b) && (b === c)) {
    return 'equilateral';
  } else if ((a === b && c !== b) || (b === c && c !== a)) {
    return 'isosceles';
  }  else if (a !== b && b !== c && c !== a) {
    return 'scalene';
  }
}


console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"