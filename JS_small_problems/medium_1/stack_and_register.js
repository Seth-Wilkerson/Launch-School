/*
  input:
    string of commands of new language
  output:
    result of executing the input commands
  
  return value of undefined?
  Will each command be separated by a space?
  numbers input will alaways be integers?

  divide and remainder need to be integer results

  Need to isolate each command and execute them in order
  detirmine the type of command
  and perform the action

  stack initalized to []
  register initialized to 0

  get a list of each command
  iterate on the list
  determine the type of command
  performe the correct action
  end
*/

/*
n : Place a value, n, in the register. Do not modify the stack.
PUSH : Push the register value onto the stack. Leave the value in the register.
ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
DIV : Pop a value from the stack and divide the register value by the popped stack value, storing the integer result back in the register.
REMAINDER : Pop a value from the stack and divide the register value by the popped stack value, storing the integer remainder of the division back in the register.
POP : Remove the topmost item from the stack and place it in the register.
PRINT : Print the register value.
*/

function minilang(script) {
  let stack = [];
  let register = 0;
  let commandList = script.split(' ');


  commandList.forEach(command => {
    switch (command) {
      case 'PUSH':
        stack.push(register);
        break;
      case 'ADD':
        if (stack.length === 0) {
          console.log('Stack is empty.');
        } else {
          register += stack.pop();
        }
        break;
      case 'SUB':
        if (stack.length === 0) {
          console.log('Stack is empty.');
        } else {
          register -= stack.pop();
        }
        break;
      case 'MULT':
        if (stack.length === 0) {
          console.log('Stack is empty.');
        } else {
          register *= stack.pop();
        }
        break;
      case 'DIV':
        if (stack.length === 0) {
          console.log('Stack is empty.');
        } else {
          register = Math.floor(register / stack.pop());
        }
        break;
      case 'REMAINDER':
        if (stack.length === 0) {
          console.log('Stack is empty.');
        } else {
          register = Math.floor(register % stack.pop());
        }
        break;
      case 'POP':
        if (stack.length === 0) {
          console.log('Stack is empty.');
        } else {
          register = stack.pop();
        }
        break;
      case 'PRINT':
        console.log(register);
        break;
      default:
        register = Number(command);
        break;
    }
  });
}

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)

minilang('6 PUSH POP POP POP');