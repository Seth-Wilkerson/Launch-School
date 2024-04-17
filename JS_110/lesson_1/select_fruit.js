/*
  Given an object of items with  string values specifying wehter that key is a fruit
  create a new object of only the key-value pairs that are of value Fruit

  {
    item1: 'Fruit',
    item2: 'Not Fruit'
  }

  Make a new object to store the fruit elements
  Check the  value  of each property in the given object
  if it is a fruit then add it to the  new  object
  return  the fruit object
*/

function selectFruit(obj) {
  let fruitObj = {};

  for (let prop in obj) {
    let currentValue = obj[prop];

    if (currentValue === 'Fruit') {
      fruitObj[prop] = currentValue;
    }
  }

  return fruitObj;
}



let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }
console.log(produce); 
