/*
  Logging all odd numbers starting from 1 to 99 
  each number on  its own line

  Probably want to loop a set number of times
  start looping from 1
  since  we know that we want to stop after 99 we can use for loop

  We know that every other number is odd meaning we couldd start at 1 and iterate by 2
  allowing us to...

  ...inside the loop log to the console the current number (the one intially set to 1)
  No need to specify a newline (\n) becasue the console.log() statement  will log on a new line each time
*/

for (let currentNum = 1; currentNum < 100; currentNum += 2) {
  console.log(currentNum);
}

/*
  Different way of logging odd numbers could be calulating if a number is odd
  using  the remanider operator (divide by 2 and check if result is not 0)

  Could ask the user to input a starting and ending number
  could be inclusive just have to make it clear to the user if it is

  Loop based on user input from readline-sync
  current number would be set to the starting number entered by user
  the condition of the for loop would be current number less than or equal to the ending number passed by user
  Can no longer increment by 2 because the starting number could be even
  must evaluate if the current  number is odd
*/