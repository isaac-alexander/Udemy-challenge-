/* CHALLENGE 17 - IFFE (Immediately Invoked Function Expression)

Complete IIFE that will expose the following methods:
    greet() - It will take one argument and return greeting string
    changeGreeting() - It will change greeting string

    Initail greeting string "Hey, that's" must be defined inside IIFE.
*/

// let a = (() => {
//     let;
//     function fn1() { }
//     function fn2() { }

//     return {
//         fn1,
//         fn2
//     }
// })();

// a.fn1()
// a.fn2()

let greeting = (() => {
    let greetingString = "Hey, that's";

    function greet(name) {
        return `${greetingString} ${name}`
    }

    function changeGreeting(newGreeting) {
        greetingString = newGreeting;
    }

    return {
        greet: greet,
        changeGreeting: changeGreeting
    }

})();

console.log(greeting.greet("Bob"));


console.log(
    greeting.changeGreeting("Good Morning from")
);

console.log(greeting.greet("Emily"));
