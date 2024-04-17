

function palindrome(str) {
  let result = true;
  let counter = 1;

  if (str.length <= 1) {
    return false;
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - counter]) {
      result = false;
    }

    counter++;
  }

  return result;
}

console.log(palindrome("racecar")); // true
console.log(palindrome("bob")); // true
console.log(palindrome("bosdasdfgeb")); // false
console.log(palindrome("r")); // false
console.log(palindrome("")); // false

// def isPalindrome(S):
//    if len(S) < 1:
//       return False;

//    for i in range(len(S)):
//       if (S[i] != S[len(S) - (i + 1)]):
//          return False;
         
//    return True;