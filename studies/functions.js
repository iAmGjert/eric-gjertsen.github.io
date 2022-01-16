/**FUNCTION
 * 
 * 0. The two phases to using functions: First we must enter the creation phase
 *      Prior to executing any code the interpreter appears to move the declaration of functions, variables or classes to the top of their scope.
 *      We call this process Hoisting. Hoisting allows functions to be used in the code before they are delcare. It also allowed variables and
 *      classes to be referenced, but could lead to unexpected errors. During the hoisting process declaration and initialization are essentially
 *      split by the interpreter. No matter how a variable was initialized (with or without the 'var' keyword speicifically, whether or not it
 *      was delcared and initialized on the same line, etc) it will not have it's intended value until the interpreter reaches the line of code
 *      that value was assigned.
 *    Next we can enter the execution (also refered to as: calling/invocation) phase  a function by?
 * 1. What's the difference between a function's parameters and arguments PASSED to a function?
 * 2. What's the syntax for a NAMED function?
 * 3. How do we assign a function to a variable?
 * 4. Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value. How do
 * we specify inputs, and how do we specify outputs?
 * 5. Scope: Functions can see and modify variables in a parent or global scopes. The inverse
 * is NOT true.
 * 6. Closures: Functions form closures around the data they house. If an object returned from the Function and 
 * is held in memory somewhere (referenced), that closure stays ALIVE, and data can continue to exist in these 
 * closures!
 */