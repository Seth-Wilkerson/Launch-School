/*
  input:
    is a string of characters
  output:
    boolean true false if the string is the same forward as backwards
  

  racecar -> true
  mm -> true
  AB -> false

  easy anser is to just get each character reverse the order of the characters
  then compare the original string to the reveresed stirng return result

  Could manually create the  reversed array rather than useing reverse()

  Could loop through the string of characters andd compare first to last
  second to second to last and so on
*/

function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true