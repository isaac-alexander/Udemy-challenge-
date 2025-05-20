/*
Answer the following questions:
 1. why is no error generated after line 14?
 2. after the line 19 TypeError is generated?

Change one line of code so the error will go away.
Don't change lines 14, 19.
 */



const arr = [1, 2];

arr.push(3);

console.log(arr);
// [1, 2, 3]

arr = [1, 2, 3, 4];
// BEFORE: Uncaught TypeError:
//    Assignment to constant variable.
// AFTER: No error

console.log(arr);
// [1, 2, 3, 4]

////Soluion
//On line 12, change the const keyword to let keyword to be able to reassign the variable.