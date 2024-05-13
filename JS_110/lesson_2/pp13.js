const truthiness = {
  falsy: [ null, undefined, '', false, NaN, 0 ],
  truthy: ['everything else...']
};

let deepCopy = {};

for (let key in truthiness) {
  deepCopy[key] = truthiness[key].slice();
}

deepCopy.a = 'hey';
deepCopy['falsy'][0] = 'TRUE';

console.log(truthiness);
console.log(deepCopy);