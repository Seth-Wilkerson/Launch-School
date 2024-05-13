const readline = require('readline-sync');

const EMPTY_SQUARE = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';

const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7]             // diagonals
];

function prompt(msg) {
  console.log(msg);
}

function displayBoard(board) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = EMPTY_SQUARE;
  }

  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === EMPTY_SQUARE);
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares(board))}):`);
    square = readline.question().trim(); // input trimmed to allow spaces in input
    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  let square;
  for (let index = 0; index < WINNING_LINES.length; index++) {
    let line = WINNING_LINES[index];
    square = findAtRiskSquare(line, board);
    if (square) break;
  }

  if (!square) {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];
  }

  board[square] = COMPUTER_MARKER;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function detectWinner(board) {
  for (let scenario = 0; scenario < WINNING_LINES.length; scenario++) {
    let humanIsTheWinner = WINNING_LINES[scenario].every(position => {
      return board[position] === HUMAN_MARKER;
    });

    let computerIsTheWinner = WINNING_LINES[scenario].every(position => {
      return board[position] === COMPUTER_MARKER;
    });

    if (humanIsTheWinner) {
      return "Player";
    } else if (computerIsTheWinner) {
      return "Computer";
    }
  }

  return null;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

/*
  Need to join each item in list into a string and separate each  item by delimeter
  also second to last and last item shouldd be separated by delimeter AND conjunction
  
  returns string

  example:
  [1,2,3], '; ', 'and'
  = '1; 2; and 3'

  define an empty result string
  loop over each position and add it to the result string followed by delimeter
  if second to last iteration then add delimeter and conjunction
  if last iteration then add only the position
  return result string

  in the case of length 2 then only add conjunction without deliemeter
  probably a if else structure
*/

function joinOr(positions, delimeter = ', ', conjunction = 'or') {
  joinedString = '';

  for (count = 0; count < positions.length; count++) {
    let secondToLastIteration = count === (positions.length - 2);
    let lastIteration = count === (positions.length - 1);

    if (secondToLastIteration) {
      if (positions.length === 2) {
        joinedString += positions[count] + ' ' + conjunction + ' ';
      } else {
        joinedString += positions[count] + delimeter + conjunction + ' ';
      }
    } else if (lastIteration) {
      joinedString += positions[count];
    } else {
      joinedString += positions[count] + delimeter;
    }
  }

  return joinedString;
}

function findAtRiskSquare(line, board) {
  let markersInLine = line.map(square => board[square]);

  if (markersInLine.filter(val => val === HUMAN_MARKER).length === 2) {
    let unusedSquare = line.find(square => board[square] === EMPTY_SQUARE);
    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }

  return null;
}

while (true) {
  let board = initializeBoard();
  let playerScore = 0;
  let computerScore = 0;

  while (true) {
    displayBoard(board);

    playerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;

    computerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;
  }

  displayBoard(board);

  if (someoneWon(board)) {
    let winner = detectWinner(board);

    if (winner === 'Player') {
      playerScore++;
    } else {
      computerScore++;
    }

    prompt(`${winner} won the game!`);

    if (playerScore === 5) {
      prompt(`Player won the match! (${playerScore}-${computerScore})`);
    } else if (computerScore === 5) {
      prompt(`Computer won the match! (${computerScore}-${playerScore})`);
    } else {
      prompt(`Player: ${playerScore} Computer: ${computerScore}`);
    }
  } else {
    prompt("It's a tie!");
  }

  prompt('Play again? (y or n)');
  let answer = readline.question().toLowerCase()[0];
  if (answer !== 'y') break;
}

prompt("Goodbye!");

/*
Determine winner tictactoe need to evalute board to see if there is already a winner and end game

Winning scenarios by postions (could be X or O):
1 2 3
4 5 6
7 8 9
1 4 7
2 5 8
3 6 9
1 5 9
3 5 7

If each position contains an X or O then there is a winner

1: X
2: X
3: X

WINNER!

make a winning conditions list or scenarios


iterate of each scenario and see if current board fits any
could use .every to test both X and O
*/