/*

*/

function afterMidnight(time) {
  let hours = Number(time.split(":")[0]);
  let minutes = Number(time.split(":")[1]);

  if (hours === 24) {
    minutes = 0;
  } else {
    minutes += (hours * 60);
  }

  return minutes;
}

function beforeMidnight(time) {
  let hours = Number(time.split(":")[0]);
  let minutes = Number(time.split(":")[1]);
  let beforeMinutes;

  if (hours === 24 || hours === 0) {
    beforeMinutes = 0;
  } else {
    beforeMinutes = 1440 - (minutes + (hours * 60));
  }

  return beforeMinutes;
}


console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);