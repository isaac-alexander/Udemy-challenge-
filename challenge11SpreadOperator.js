/* CHALLENGE 11 - Spread Operator

Use Spread Operator to construct arr variable.
*/



let a, b, c, d, arr;

a = [1, 2];
b = [4, 5];
c = [8, 9, 10];
d = 11;

//Write code here

arr = [0, ...a, 3, ...b, 6, 7, ...c, d];

console.log(arr);
