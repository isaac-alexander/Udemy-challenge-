/* CHALLENGE 6: Arrow Function

Use arrow functions instead of functions
where possible,
*/



function mult1(a, b) {
    return a * b;
}

setTimeout(function() {
    console.log(mult1(5, 10));
    
}, 1000);

//SOLUTION

const mult2 = (a, b) =>  a * b;
setTimeout(() => console.log(mult2(5, 10)), 1000);