/* CHALLENGE 12 - Copy Array

Create copy of the a array.
*/



let a = [1, 2, 3];

let b;

//Copy array here
//b = a.slice(); or

b = [...a];

b.push("newElement");

console.log(a);

console.log(b);
