/*
    input:
        floating point value of a degree between 0 and 360
    output:
        is the same value in degrees, minutes, and seconds
    
    will use array to build output
    
    Need to get degree amount and add to string
    divide 60 by remaining decimal to get minute amount
    divide 60 by remaining decimal to get second amount

    some sort of while loop that leeps looping while there is a decimal
    or keep going byt ensure the values return 0

    define result array
    separate the degrees and the decimal
    Loop twice
        multiply 60 by decimal number
        split num and decimal
        add to array
        update deciaml number to new decimal
    
    build output string using the array
*/

function dms(degree) {
    let result = [];

    do {
        let [before, after] = String(degree).split('.');

        decimalNumber = after === undefined ? 0 : Number('0.' + after);
        result.push(before);

        degree = 60 * decimalNumber;
    } while (result.length !== 3)

    return `${result[0]}°${result[1]}'${result[2]}"`
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"