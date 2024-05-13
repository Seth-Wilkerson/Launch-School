let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

let deepCopy = JSON.parse(JSON.stringify(munsters));

for (let key in deepCopy) {
  Object.freeze(deepCopy[key]);
}

console.log(deepCopy);