/*
  input:
    three numbers representing the three angles of the triangle
  output:
    wether the triangle is acute right obtuse or invalid
  
  Right: One angle is a right angle (exactly 90 degrees).
  Acute: All three angles are less than 90 degrees.
  Obtuse: One angle is greater than 90 degrees.

  To be a valid triangle, the sum of the angles must be exactly 180 degrees, 
  and every angle must be greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

  firstly check if triangle is valid
    return invalid
  if valid
    check if one angle is 90 (some)
    if all angles are less than 90 (every)
    one angle is greater than 90 (some)

  (some and every) indicate that an array would be useful here
  
  put angles in a list
  to find if valid get the sum of angles
  and check that all are greater than 0
*/

function isValidTriangle(angleArr) {
  let sum = angleArr.reduce((accum, elem) => {
    return accum + elem;
  });

  let aboveZero = angleArr.every(angle => angle > 0);

  if (sum !== 180 || !aboveZero) {
    return false;
  }

  return true;
}

console.log(isValidTriangle([50, 60, 70])); // true
console.log(isValidTriangle([0, 90, 90])); // false
console.log(isValidTriangle([50, 50, 50])); // false

function triangle(a, b, c) {
  let angleArr = [a, b, c];

  if (!isValidTriangle(angleArr)) {
    return 'invalid';
  } else if (angleArr.some(angle => angle === 90)) {
    return 'right';
  } else if (angleArr.every(angle => angle < 90)) {
    return 'acute';
  } else if (angleArr.some(angle => angle > 90)) {
    return 'obtuse';
  }
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"