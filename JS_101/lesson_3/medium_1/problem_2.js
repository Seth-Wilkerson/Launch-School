// Dealing with primitvie values with  each character  of the stirng
// that means we will  be making copies  of the value in  use
// iterate through each  character in the string
// check if that  character is  equal to itself capitalized or lowercased
// note this works because of above no need to worry about references
// if lower make it upper
// else upper make it lower
// appened to new resutl string

let munstersDescription = "The Munsters are creepy and spooky.";
let reversedCaseString = '';

for (let i = 0; i < munstersDescription.length; i++) {
  let currentChar = munstersDescription[i];

  if (currentChar.toUpperCase() === currentChar) {
    reversedCaseString += currentChar.toLowerCase();
  } else if (currentChar.toLowerCase() === currentChar) {
    reversedCaseString += currentChar.toUpperCase();
  }
}

console.log(reversedCaseString);