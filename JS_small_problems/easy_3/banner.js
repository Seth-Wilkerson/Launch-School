/*
  Write a function that will take a short line of text, and write it to the console log within a box.


+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+

+--+
|  |
|  |
|  |
+--+


basedd on examples and test cases it appears that the corners are +
and there are str.length + 2 number of - hyphens
and  the vertical lines will be three | with spaces equal to str.length + 2


define a console.log statement for each line
or a string using repeat and the string length
*/

function logInBox(str, limit) {
  if (limit) {
    strArray = str.split('');
    strArray.length = limit;
    str = strArray.join('');
  }

  let verticalLine = '|';
  let plusSign = '+';
  let horizontalHyphens = '-'.repeat(str.length + 2);
  let spaces = ' '.repeat(str.length + 2);
  let space = ' ';

  let line1 = plusSign + horizontalHyphens + plusSign;
  let line2 = verticalLine + spaces + verticalLine;
  let line3 = verticalLine + space + str + space + verticalLine;
  let line4 = line2;
  let line5 = line1;

  console.log(line1);
  console.log(line2);
  console.log(line3);
  console.log(line4);
  console.log(line5);
}

logInBox('To boldly go where no one has gone before.', 55466);
logInBox('');
logInBox('To=.');
logInBox('I AM INSANE!!!');