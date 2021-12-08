// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
//create a for loop starting at 1 and ending at 100
    for (var i = 1; i <= 100; i++){
        //check if the number i'm currently at is divisible by both 5 and 3
        if ((i % 3 === 0) && (i % 5 === 0)){
            console.log("FizzBuzz");//if true print FizzBuzz
        } else if (i % 3 === 0){//check if divisible by just 3
            console.log("Fizz");//if true print Fizz
        } else if (i % 5 === 0){//check if divisible by just 5
            console.log("Buzz");//if true print Buzz
        } else {
            console.log(i);//if all else fails print number
        }
    }

    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}