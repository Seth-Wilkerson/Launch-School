VOWELS = ['a', 'e', 'i', 'o', 'u'];

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

Object.values(obj).forEach(elem => {
  elem.forEach(subElem => {
    subElem.split('').forEach(char => {
      if (VOWELS.includes(char)) console.log(char);
    });
  });
});