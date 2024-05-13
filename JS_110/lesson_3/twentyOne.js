/*
  1. Initialize deck
  2. Deal cards to player and dealer
  3. Player turn: hit or stay
    - repeat until bust or stay
  4. If player bust, dealer wins.
  5. Dealer turn: hit or stay
    - repeat until total >= 17
  6. If dealer busts, player wins.
  7. Compare cards and declare winner.


  Deck:
    [['H', '2'], ['S', 'J'], ['D', 'A']]

    For hitting and shuffling we will need to change the order and remove elements from the deck
    But having access to the original deck is never necessary meaning we can mutate that array
    and it will be reset when a new game starts. (Future add could be multiple hands and potenially reshuffling all the cards in deck)

    Shuffle before dealing

    Deal two cards to player and dealer do this by remving top 4 cards from deck
    (in this case that means popping the last elements of the deck array)

    Player can choose to hit until bust or until stay
    need to implement bust and hit

    hit should just be dealing a card

    bust should check the total score of the hand
    Will need to display new card added to hand after hit
    display should display full names of cards (like ace of spades)
*/
const readline = require('readline-sync');

const SUITS = {
  H: 'Hearts',
  D: 'Diamonds',
  S: 'Spades',
  C: 'Clubs'
};

const NUMBERS = {
  A: 'Ace',
  2: 'Two',
  3: 'Three',
  4: 'Four',
  5: 'Five',
  6: 'Six',
  7: 'Seven',
  8: 'Eight',
  9: 'Nine',
  10: 'Ten',
  J: 'Jack',
  Q: 'Queen',
  K: 'King'
};

function total(cards) {
  // cards = [['H', '3'], ['S', 'Q'], ... ]
  let values = cards.map(card => card[1]);

  let sum = 0;
  values.forEach(value => {
    if (value === "A") {
      sum += 11;
    } else if (['J', 'Q', 'K'].includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });

  // correct for Aces
  values.filter(value => value === "A").forEach(_ => {
    if (sum > 21) sum -= 10;
  });

  return sum;
}

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; // swap elements
  }
}

function deal(hand, deck) {
  hand.push(deck.pop());
}

function displayHands(playerHand, dealerHand) {
  console.clear();

  console.log(`Player: ${total(playerHand)}`);
  playerHand.forEach(card => {
    console.log(`${NUMBERS[card[1]]} of ${SUITS[card[0]]}`);
  });

  console.log(); // Space

  // Start from the second card that way the first card remains a secret
  console.log(`Dealer:`);
  for (let idx = 1; idx < dealerHand.length; idx++) {
    console.log(`${NUMBERS[dealerHand[idx][1]]} of ${SUITS[dealerHand[idx][0]]}`);
  }
}

function busted(hand) {
  return total(hand) > 21;
}

function displayWinner(winner, playerHand, dealerHand) {
  console.clear();

  console.log(`Player: ${total(playerHand)}`);
  playerHand.forEach(card => {
    console.log(`${NUMBERS[card[1]]} of ${SUITS[card[0]]}`);
  });

  console.log(`\nDealer: ${total(dealerHand)}`);
  dealerHand.forEach(card => {
    console.log(`${NUMBERS[card[1]]} of ${SUITS[card[0]]}`);
  });

  if (winner === 'Tie') {
    console.log('****************');
    console.log('*  It\'s a tie!  *');
    console.log('****************');
  } else {
    console.log('****************');
    console.log(`* ${winner} wins! *`);
    console.log('****************');
  }
}

let deck = [
  ['H', 'A'], ['H', '2'], ['H', '3'], ['H', '4'], ['H', '5'], ['H', '6'], ['H', '7'], ['H', '8'], ['H', '9'], ['H', '10'], ['H', 'J'], ['H', 'Q'], ['H', 'K'],
  ['D', 'A'], ['D', '2'], ['D', '3'], ['D', '4'], ['D', '5'], ['D', '6'], ['D', '7'], ['D', '8'], ['D', '9'], ['D', '10'], ['D', 'J'], ['D', 'Q'], ['D', 'K'],
  ['S', 'A'], ['S', '2'], ['S', '3'], ['S', '4'], ['S', '5'], ['S', '6'], ['S', '7'], ['S', '8'], ['S', '9'], ['S', '10'], ['S', 'J'], ['S', 'Q'], ['S', 'K'],
  ['C', 'A'], ['C', '2'], ['C', '3'], ['C', '4'], ['C', '5'], ['C', '6'], ['C', '7'], ['C', '8'], ['C', '9'], ['C', '10'], ['C', 'J'], ['C', 'Q'], ['C', 'K']
];

shuffle(deck);

let playerHand = [];
let dealerHand = [];

deal(playerHand, deck);
deal(dealerHand, deck);
deal(playerHand, deck);
deal(dealerHand, deck);

displayHands(playerHand, dealerHand);


// Player turn
while (true) {
  console.log(); // Space
  console.log("hit or stay?");
  let answer = readline.question();

  if (answer === 'hit') {
    deal(playerHand, deck);
    displayHands(playerHand, dealerHand);
  }

  if (answer === 'stay' || busted(playerHand)) break;
}

if (busted(playerHand)) {
  displayWinner('Dealer', playerHand, dealerHand);
} else {
  console.log("You chose to stay!");

  // Dealer turn
  while (true) {
    if (total(dealerHand) >= 17 || busted(dealerHand)) break;

    deal(dealerHand, deck);
    displayHands(playerHand, dealerHand);
  }

  if (busted(dealerHand)) {
    displayWinner('Player', playerHand, dealerHand);
  } else if (total(playerHand) > total(dealerHand)) {
    displayWinner('Player', playerHand, dealerHand);
  } else if (total(dealerHand) > total(playerHand)) {
    displayWinner('Dealer', playerHand, dealerHand);
  } else {
    displayWinner('Tie', playerHand, dealerHand);
  }
}
