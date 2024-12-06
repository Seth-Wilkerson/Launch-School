/*
  input:
    string
  output:
    object where key is lowercase letter and value is how often they appear
  
  Only lowercase letters count
  empty string empty Object
  Need way to identify if each character is letter
  and if it is lowercase

  Need way to track how many of same letter we have seen (count)

  define an empty hash/seen/count obj
  define valid letters (or use > a < Z)
  look at each character
  if character is letter and lowercase
    add to count obj or increase count if seen
  return count obj
*/

const LOWER_LETTERS = 'abcdefghijklmnopqrstuvwxyz'

function countLetters(text) {
  let countObj = {};
  
  text.split('').forEach(char => {
    if (LOWER_LETTERS.includes(char)) {
      if (countObj.hasOwnProperty(char)) {
        countObj[char] += 1;
      } else {
        countObj[char] = 1;
      }
    }
  });

  return countObj;
}

const p = console.log;
const objeq = function(obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (! keys2.includes(key)) {
      return false;
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

let expected = {'w': 1, 'o': 2, 'e': 3, 'b': 1, 'g': 1, 'n': 1};
p(objeq(countLetters('woebegone'), expected));

expected = {'l': 1, 'o': 1, 'w': 1, 'e': 4, 'r': 2,
            'c': 2, 'a': 2, 's': 2, 'u': 1, 'p': 2};
p(objeq(countLetters('lowercase/uppercase'), expected));

expected = {'u': 1, 'o': 1, 'i': 1, 's': 1};
p(objeq(countLetters('W. E. B. Du Bois'), expected));

p(objeq(countLetters('x'), {'x': 1}));
p(objeq(countLetters(''), {}));
p(objeq(countLetters('!!!'), {}));
