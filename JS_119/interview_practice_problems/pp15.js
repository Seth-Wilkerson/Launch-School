/*
  input:
    string of digits
  output:
    the greatest product of four consecutive digits
  
  always more than four digits
  multiplying single digits
  a 0 on its own would result in 0

  check the product of every posible 4 consecutive digits
  get the greatest product highest
  return that product

  iterate over string
  look at slice of string from idx to idx + 4
  until end of string
  get each digit in that string
  convert it to a number
  multiply them all
  store in list of products
  
  sort the list of products
  return the highest one first or last depending on sort
*/

function greatestProduct(strOfNums) {
  let productList = [];

  for (let idx = 0; idx <= strOfNums.length - 4; idx++) {
    let subStr = strOfNums.slice(idx, idx + 4);
    let digits = subStr.split('');
    let product = digits.reduce((accum, prod) => accum * Number(prod), 1);
    
    productList.push(product);
  }

  productList.sort((a, b) => b - a);

  return productList[0];
}


const p = console.log;
p(greatestProduct('23456') === 360);      // 3 * 4 * 5 * 6
p(greatestProduct('3145926') === 540);    // 5 * 9 * 2 * 6
p(greatestProduct('1828172') === 128);    // 1 * 8 * 2 * 8
p(greatestProduct('123987654') === 3024); // 9 * 8 * 7 * 6