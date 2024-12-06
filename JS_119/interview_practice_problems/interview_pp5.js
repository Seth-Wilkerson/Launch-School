// NOT SOLVED


/*
  input:
    a string
  output:
    the character that appears the most
  
  if same count for most
    return one htat appears first
  
  What if string is empty?
    not in test cases
  Does it have to be a letter or character?
    character description says
  
  case does not matter A = a

  make entire string lowercase
  define a seen object
  look at each character
  and keep a count

  issue is we have no way of knowing which character came first
  with this approach

  have the counts
  we have the original string and order

  tracked current highest count
  and the current character that goes with it

  check if current count in seen is higher than current highest count
  if it is update the current highest count and current character


  try something else:

  have the counts
  we have the original string and order

  get the highest count
  if tie
  check the index of both characters and compare for lowest index
  retunr that one
*/

function mostCommonChar(str) {
  let lowerStr = str.toLowerCase();
  let seen = {};

  lowerStr.split('').forEach(char => {
    if (seen.hasOwnProperty(char)) {
      seen[char] += 1;
    } else {
      seen[char] = 1;
    }
  });

  let seenObjArr = Object.entries(seen);

  seenObjArr.sort((a, b) => {
    return b[1] - a[1];
  });

  let highestArr = seenObjArr.filter(ele => ele[1] === seenObjArr[0][1]);

  if (highestArr.length > 1) {
    let currentLowIdx = str.indexOf(highestArr[0][0]);
    let currentLowChar = highestArr[0][0];

    highestArr.forEach(ele => {
      if (str.indexOf(ele[0]) < currentLowIdx) {
        currentLowIdx = str.indexOf(ele[0]);
        currentLowChar = ele[1];
      }
    });

    return currentLowChar;
  } else {
    return highestArr[0][0];
  }
}

const p = console.log;
p(mostCommonChar('Hello World') === 'l');
p(mostCommonChar('Mississippi') === 'i');
p(mostCommonChar('Happy birthday!') === 'h');
p(mostCommonChar('aaaaaAAAA') === 'a');

let myStr = 'Peter Piper picked a peck of pickled peppers.';
p(mostCommonChar(myStr) === 'p');

myStr = 'Peter Piper repicked a peck of repickled peppers. He did!';
p(mostCommonChar(myStr) === 'e');


// NOT SOLVED