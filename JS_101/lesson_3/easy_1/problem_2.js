let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

let lastCharacter1 = str1[str1.length - 1];

if (lastCharacter1 == '!') {
  console.log('Ends with !');
}

str2.endsWith('!');