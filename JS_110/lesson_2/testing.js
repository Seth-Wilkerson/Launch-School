function interleave(arr1, arr2) {
  return arr1.reduce((accum, currVal, currIdx) => {
    accum.push(currVal, arr2[currIdx]);
    return accum;
  }, []);
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]
