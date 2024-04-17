/*
prompt the user for width of room in meters
prompt the user for length of room  in meters

calculate the area of the room in square meters and square feet
provided is a calculation to convert square meters to square feet Note: 1 square meter == 10.7639 square feet
return log results to user

No need to validate input or worry about looping for multiple tries
*/

const readline = require('readline-sync');
const ONE_SQ_METER_IN_SQ_FEET = 10.7639;

console.log('Enter width in Meters: ');
let widthInMeters = readline.prompt();

console.log('Enter length in Meters: ');
let lengthInMeters = readline.prompt();

let areaInSquareMeters = Number(widthInMeters) * Number(lengthInMeters);
let areaInSquareFeet = areaInSquareMeters * ONE_SQ_METER_IN_SQ_FEET;
console.log(areaInSquareFeet);