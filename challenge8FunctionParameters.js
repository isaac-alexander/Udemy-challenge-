/* CHALLENGE 8: Check The Presence Of The Function Parameters

Throw Error when function square() is called
without arguments.

Create new function and use it as default parameter.
*/



function squareA(a) {
    console.log(a * a);

}

squareA(10); //100

squareA();
//BEFORE: NaN
//AFTER: Uncaught Error: Function square requires an argument!

// SOLUTION

function missingArg() {
    throw new Error("Function square requires an argument!");
}


function square(a = missingArg()) {
    console.log(a * a);

}

square(10);


square();