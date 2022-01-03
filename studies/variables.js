/** VARIABLES
 *  
 * 0. To hold things in memory during the life-cycle of a
 * program, we can use variable. Variables
 * are names identifiers that can poit to values of a
 * particular type, like a Number, String,
 * Boolean, Array, Object, or another data-type. Variables
 * are called so because once created, we
 * can CHANGE the value (and type fo value) to which they
 * point.
 * 
 * 1. To create a varibale we use the keyword, var,
 * followed by a name (id or alias) for our
 * variable.
 * 
 * 2. There are 2 phases of using variables: declaration
 * and initialization (or assignment). 
 * 
 * 3. There are two other types of varibales that use the keywords, let and const, used in place of the var keyword during declaration.
 * the let and const keyword share some attributes, such as they cannot be declared unless they are given a unique identifier or name.
 * let variables values can be reassigned throughout the program.
 * const variables are a fixed value that cannot be reassigned.
 */

// 1. Declaration and assignment //
// When you initialize or declare a variable you are creating a named container that will hold some type of information.
// Unless you assingn the varibale a value it will resolve to undefined.
// a const varible must be initialized or you will recieve an error at run time.

var myName;
let myLastName;
const myFullName = myName + " " + myLastName;
console.log(myName); //prints => undefined
console.log(myLastName); //prints => undefined
console.log(myFullName); //prints => undefined undefined


// When you assign or re-assign a variable you are giving that variable a value associated to it.

myName = 'John';
console.log(myName); // prints => John
myLastName = 'Smith';
console.log(myLastName);// prints => Smith


// 2. var, let, const //
// 


// 3. Hoisting //
// Changing or updating the value of a previously assigned variable
myName = 'Bob';
console.log(myName); // prints => Bob