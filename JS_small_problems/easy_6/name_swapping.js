function swapName(firstLast) {
  return firstLast.split(" ").reverse().join(", ");
}

console.log(swapName("Joe Roberts"));    // "Roberts, Joe"