/*
  XOR function that will return true if one argument (operand) is turthy and
  returns false if both are turthy.
  If both are falsy then return false

  if both are true
    then rreturn false
  else if one is true
    then return true
  else
    return false
*/

function xor(operand1, operand2) {
  if (operand1 && operand2) {
    return false;
  } else if (operand1 || operand2) {
    return true;
  } else {
    return false;
  }
}

console.log(xor(5, 0) === true);          // true
console.log(xor(false, true) === true);   // true
console.log(xor(1, 1) === false);         // true
console.log(xor(true, true) === false);   // true
console.log(xor(0, 0) === false);         // true
console.log(xor('', 0) === false);        // true
console.log(xor(false, '') === false);    // true