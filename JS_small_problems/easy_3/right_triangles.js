/*
  Write a function that takes a positive integer, n, as an argument and logs a right triangle whose sides each have n stars.
  The hypotenuse of the triangle (the diagonal side in the images below) should have one end at the lower-left of the triangle,
  and the other end at the upper-right.

  input  positive integer
  no return log to console triangle of stars
  right justified

  essentially going to be n number of rows each with n number of characters
  row 1 would be n - 1 spaces and 1 star
  row 2 would be n - 2  spaces and 2 stars

      *
     **
    ***
   ****
  *****

  need to loop n times
  on each iteration log to the console one row of the structure
  use formula above to log correct row\

  need to start interating from 1 and use that count to ddo formulas on each iteration
  use repeat to achieve correct string
*/

function triangle(n) {
  for (let count = 1; count <= n; count++) {
    console.log(' '.repeat(n - count) + '*'.repeat(count));
  }
}

triangle(5);

//     *
//    **
//   ***
//  ****
// *****

triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********