let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let sumOfAges = Object.values(munsters).filter(elem => elem.gender === 'male').reduce((accum, elem) => {
  return accum + elem.age;
}, 0);

console.log(sumOfAges);