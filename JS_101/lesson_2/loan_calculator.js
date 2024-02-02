const readline = require('readline-sync');
const MESSAGE = require('./loan_calculator_message.json');
const MONTHS_IN_A_YEAR = 12;
const YES = '1';
const NO = '2';
let runAgain = true;

function display(message) {
  console.log(`* ${message}`);
}

function invalidNumber(num) {
  // Returns true if num is an empty string or not a number greater than 0
  return num.trim() === '' ||
         Number(num) < 0   ||
         Number.isNaN(Number(num));
}

function getValidNumberFromUser() {
  let userInput = readline.question();

  // Excluding invalid numbers as well as 0
  while (invalidNumber(userInput) || Number(userInput) === 0) {
    display(MESSAGE.invalidNumber);
    display(MESSAGE.tryAnotherNumber);
    userInput = readline.question();
  }

  return Number(userInput);
}

function getValidPercentageFromUser() {
  let userInput = readline.question();

  // Only allow numbers between 0 and 100
  while (invalidNumber(userInput) || Number(userInput) > 100) {
    display(MESSAGE.invalidPercentage);
    display(MESSAGE.tryAnotherPercentage);
    userInput = readline.question();
  }

  return Number(userInput);
}

function evaluateMonthlyLoanPayment(
  loanAmount,
  monthlyInterestRate,
  loanDurationInMonths
) {
  return loanAmount *
    (monthlyInterestRate /
    (1 - Math.pow((1 + monthlyInterestRate), (-loanDurationInMonths))));
}

function requestUserToRunAgain() {
  display(MESSAGE.requestRunCalculatorAgain);
  let userInputToRunAgain = readline.question();

  while (!['1', '2'].includes(userInputToRunAgain)) {
    display(MESSAGE.inputRequirements);
    userInputToRunAgain = readline.question();
  }

  return userInputToRunAgain;
}

display(MESSAGE.greeting);

while (runAgain) {
  display(MESSAGE.line);

  display(MESSAGE.requestLoanAmount);
  let loanAmount = getValidNumberFromUser();

  display(MESSAGE.requestLoanApr);
  let annualPercentageRate = getValidPercentageFromUser();

  display(MESSAGE.requestLoanDuration);
  let loanDurationInYears = getValidNumberFromUser();

  let monthlyInterestRate = (annualPercentageRate / MONTHS_IN_A_YEAR) / 100;
  let loanDurationInMonths = loanDurationInYears * MONTHS_IN_A_YEAR;

  let monthlyLoanPayment = evaluateMonthlyLoanPayment(
    loanAmount,
    monthlyInterestRate,
    loanDurationInMonths
  );

  display(`The monthly loan payment is $${monthlyLoanPayment.toFixed(2)}!`);
  display(MESSAGE.line);

  let userInputToRunAgain = requestUserToRunAgain();

  if (userInputToRunAgain === YES) {
    runAgain = true;
  } else if (userInputToRunAgain === NO) {
    display('Turning off!');
    break;
  }
}