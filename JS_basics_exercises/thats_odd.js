let number = 1;

while (number <= 40) {
  if (number % 2 !== 0) {
    console.log(number);
  }

  number += 1;
}

// This solution loops too many times could have addedd 2 on each iteration