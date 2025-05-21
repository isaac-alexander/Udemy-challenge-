/* CHALLENGE 4: Hoisting

Change code to fix first error after line 15
Error after the line 20 should still be generated.
*/



var a = 5,
    b = 10;

if (b > a) {
    c = a + b + c;
    let c = 2;
    console.log(c);
    // BEFORE: Uncaught ReferenceError: c is not defined
    // AFTER: 17
}

console.log(c);
// Uncaught ReferenceError: c is not defined

//SOLUTION

//Define c with the let keyword before trying to reassign it. declaration before re-assiging
// let c = 2;
// c = a + b + c;