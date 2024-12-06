/*
  input:
    String of characters
  output:
    string with every character from input duplicated
  
  if empty return empty

  Need to iterate over each character and construct new string
  with two of each character

  implementation:
    use repeat
*/

function repeater(str) {
  doubleChar = "";

  str.split('').forEach(char => {
    doubleChar += char.repeat(2);
  });

  return doubleChar;
}


console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""