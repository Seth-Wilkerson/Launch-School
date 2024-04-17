// What will each of the following code snippets print? Explain why in detail.

const A = ["green", "yellow", {color: "orange"}, "red"];
let b = A.slice();

b[2].color = "brown";
console.log(A);

const A = ["green", "yellow", {color: "orange"}, "red"];
let b = A.slice();

b[2] = {color: "brown"};
console.log(A);


// Can you identify the scope of all of the variables in the following code?

let a = 1;

function foo(b) {
  const c = 3;
  
  if (true) {
    let d = 4;
  }

  return b + 5;
}

let e = foo(2);