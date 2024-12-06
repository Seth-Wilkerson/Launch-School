/*
  input:
    array of integers
  output:
    integer that appears odd number of times
  
  there will always be exactly one integer that appears an odd number of times
  

  count the number of times each number appears
  select the number with an odd count
  return that number

  define a counts object
  iterate on each number
  if number has been seen increment its count
  if not seen create a count at 1
  
  counts object entries
  filter to only entries with odd count
  it should only be one 
  return the number for that entry
*/

function oddFellow(numArr) {
  let countObj = {};

  numArr.forEach(num => {
    if (countObj.hasOwnProperty(num)) {
      countObj[num] += 1;
    } else {
      countObj[num] = 1;
    }
  });

  let oddEntryList = Object.entries(countObj).filter(entry => {
    return entry[1] % 2 === 1;
  });

  return Number(oddEntryList[0][0]);
}

const p = console.log;
p(oddFellow([4]) === 4);
p(oddFellow([7, 99, 7, 51, 99]) === 51);
p(oddFellow([7, 99, 7, 51, 99, 7, 51]) === 7);
p(oddFellow([25, 10, -6, 10, 25, 10, -6, 10, -6]) === -6);
p(oddFellow([0, 0, 0]) === 0);