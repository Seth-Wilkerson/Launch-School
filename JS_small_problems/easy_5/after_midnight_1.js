/*
The time of day can be represented as the number of minutes before or after midnight. 
If the number of minutes is positive, the time is after midnight. 
If the number of minutes is negative, the time is before midnight.

Write a function that takes a time using this minute-based format and returns the time of day in 24 hour format (hh:mm). 
Your function should work with any integer input.

You may not use javascript's Date class methods.

input:
  Integer positive or negative indicating the number of minute before or after midnight
Output:
  String of time in 24 hour format hh:mm

  What happens if it is more than a days worth of minutes?
  Does it go full circle?

  test cases answer this

  Conceptially we are starting at midnight or (0) as the test cases show
  if we have a positive value we want to count up past midnight that many minutes
  otherwise count down that many minutes before midnight

  the day in this case is not considered

  if greater than 60
  divide by 60 to get hours
  if greater than 24
  divide by 24
  ignore days and only add hours and minute


*/

function timeOfDay(minBeforeAfter) {
  let isPositive = minBeforeAfter >= 0;
  let digits;
  let minutes;
  let hours;

  if (isPositive) {
    digits = minBeforeAfter;
  } else {
    digits = minBeforeAfter * -1;
  }

  if (digits >= 60) {
    hours = Math.floor(digits / 60);
    minutes = Number(String(digits / 60).split('.'));
  } else {
    minutes = digits;
  }

  if (hours >= 24) {
    hours = Number(String(hours / 60).split('.'));
  }

  if (isPositive) {
    return `${hours}:${minutes}`;
  }
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");