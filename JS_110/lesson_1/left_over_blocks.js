/*
  Leftover Blocks

You have a number of building blocks that can be used to build a valid structure. There are certain rules about what determines the validity of a structure:

The building blocks are cubes
The structure is built in layers
The top layer is a single block
A block in an upper layer must be supported by four blocks in a lower layer
A block in a lower layer can support more than one block in an upper layer
You cannot leave gaps between blocks
Write a program that, given the number for a specific amount of cubes, calculates the number of blocks left over after building the tallest possible valid structure.


// Problem
  Input/Output
    - Input is the number of available cubes
    - Output is number of blocks left after building the structure

  Explict
    - A block in an upper layer must be supported by four blocks in a lower layer
    - A block in a lower layer can support more than one block in an upper layer
    - You cannot leave gaps between blocks
    - The building blocks are cubes
    - The top layer is a single block

  Implict
    - 

  What is a layer?
  What is an upper or lower layer?
  What is a gap?
  is the input an integer?
  what if the amount left over is 0?
  


// Examples
  Layer cannot have extra blocks based on test cases provided
  There can be 0 left over blocks meaning all are used in the structure


// Data Structure
  layers of blocks
  each layer is a grid of different size
  Each block in an upper layer has exactly 4 blocks in a lower layer

     .
    ....
  .........


// Algorithm
  1. Define the empty structure array
  2. if provided enough blocks
    a. Create next layer starting from top layer
    b. add to the structure array
  3. repeat step 2 until no more layers can be created with the provided number of blocks
  4. Return the remaining number of blocks unused in the structure

  Create next layer starting from top layer
    1. create an empty array layer
    2. add the number of blocks for the current layer (current layer * current layer)
    3. add the layer to the structure
*/

function calculateLeftoverBlocks(numberOfBlocks) {
  let numberOfBlocksNeededForCurrentLayer = 1;
  let currentLayer = 1;
  let currentNumberOfBlocks = numberOfBlocks

  while (currentNumberOfBlocks >= numberOfBlocksNeededForCurrentLayer) {
    currentNumberOfBlocks -= numberOfBlocksNeededForCurrentLayer;
    currentLayer += 1;
    numberOfBlocksNeededForCurrentLayer = currentLayer * currentLayer;
  }

  return currentNumberOfBlocks;
}

console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true