/*
  input;
    item identifier
    array of transaction objects
  output:
    true or false depending on if the item is available
  
  using method from preivous exercise
  we can get the relevant transactions to the specific itemId

  then we need to add up the quantities of each of those transactions
  depedning on wehter the movement is in or out do + or -
  if the total in the end is greater than 0 return true
  otherwise false

*/

function transactionsFor(itemId, transactions) {
  return transactions.filter(transObj => {
    return itemId === transObj['id'];
  });
}

function isItemAvailable(itemId, transactions) {
  let specificItemTransactions = transactionsFor(itemId, transactions);

  let quantity = specificItemTransactions.reduce((quantity, transObj) => {
    if (transObj['movement'] === 'in') {
      return quantity + transObj['quantity'];
    } else {
      return quantity - transObj['quantity'];
    }
  }, 0);

  // I prefer this being explict return true or false
  return quantity > 0 ? true : false;
}

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
  { id: 105, movement: 'in',  quantity: 10 },
  { id: 102, movement: 'out', quantity: 17 },
  { id: 101, movement: 'in',  quantity: 12 },
  { id: 103, movement: 'out', quantity: 20 },
  { id: 102, movement: 'out', quantity: 15 },
  { id: 105, movement: 'in',  quantity: 25 },
  { id: 101, movement: 'out', quantity: 18 },
  { id: 102, movement: 'in',  quantity: 22 },
  { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true