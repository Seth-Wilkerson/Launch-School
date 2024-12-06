/*
  input:
    string
  output:
    object with 3 properties the percentage of characters that are uppercase
    lowercase and neither

  Need to examine each character
  Need to determine if character is a letter
    if it is wether it is upper or lower case
  Keep track of the count of upper, lower, and neither
  Use the count of all characters to calculate the percentages

  upperCount / totalCount = percetage
  round to two decimal places
*/

function letterPercentages(str) {
  let percentages = {
    lowercase: "",
    uppercase: "",
    neither: ""
  }

  let upperCount = 0;
  let lowerCount = 0;
  let neitherCount = 0;
  let totalCount = str.length;

  str.split('').forEach(char => {
    if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
      if (char.toUpperCase() === char) {
        upperCount += 1;
      } else {
        lowerCount += 1;
      }
    } else {
      neitherCount += 1;
    }
  });

  percentages['lowercase'] = ((lowerCount / totalCount) * 100).toFixed(2);
  percentages['uppercase'] = ((upperCount / totalCount) * 100).toFixed(2);
  percentages['neither'] = ((neitherCount / totalCount) * 100).toFixed(2);

  return percentages;
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }