let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let resultArr = [];

Object.values(obj).forEach(subObj => {
  resultArr.push(subObj['colors'].map(elem => elem[0].toUpperCase() + elem.slice(1)));
  resultArr.push(subObj['size'].toUpperCase());
});

console.log(resultArr);


/*
  I did this wrong! Totally did not read the question correctly.
*/
