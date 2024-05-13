let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

let obj = {};

arr.forEach(elem => {
  obj[elem[0]] = elem[1];
});

console.log(obj);