console.log([2, 11, 9, 4, 107, 21, 1].sort((a, b) => {
  console.log("A: " + a);
  console.log("B: " + b);
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}));