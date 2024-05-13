let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let newArr = arr.map(elem =>  {
  let newObj = {};

  for (let key in elem) {
    newObj[key] = elem[key] + 1;
  }

  return newObj;
});

console.log(arr);
console.log(newArr);