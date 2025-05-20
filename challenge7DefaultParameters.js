/* CHALLENGE 7 - Default parameters

Answer the following question:
1. Why on the line 14 we can't simply use the following statement:
mult = mult || 2;

Set default value of the mult parameter
in the multiplyBy() function.
*/



function multiplyBy(a, mult) {
    mult = mult !== undefined ? mult : 2;
    console.log(a * mult);
    
}

multiplyBy(2);

multiplyBy(2, undefined);

multiplyBy(2, 0);

multiplyBy(5, 10);

//SOLUTION


function multiplyBy(a, mult = 2) {
    console.log(a * mult);
    
}

multiplyBy(2);

multiplyBy(2, undefined);

multiplyBy(2, 0);

multiplyBy(5, 10);