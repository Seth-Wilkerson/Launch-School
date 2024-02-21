function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}

function isColorValid2(color) {
  return (color === "blue" || color === "green");
}

let color = 'blue';
let color2 = 'red';

console.log(isColorValid(color)); // true
console.log(isColorValid(color2)); // false

console.log(isColorValid2(color)); // true
console.log(isColorValid2(color2)); // false