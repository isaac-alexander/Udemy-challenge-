/* CHALLENGE 5: Ternary Operator

Change contents of the isNumber function
using ternary operator.
*/



function isNumber(a) {
    return typeof a === "number" ? "That's a number" : "That's not a number";

// if (typeof a === "number") {
//     return "That's a number";
// } else {
//     return "That's not a number"
// }

}

console.log(isNumber(10));
console.log(isNumber("Hey there"));
console.log(isNumber(true));