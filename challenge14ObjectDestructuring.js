/* CHALLENGE 14 - Object Destructuring

Create shortPerson() function that will destructure each person object.
Sample result:
{n: "Mike", c: "Spain", a: 23, p: 100}

If input object doesn't have postQuantity field
it should get default value 0.
*/



let person1 = {
    name: "Mike",
    info: {
        country: "Spain",
        age: 23
    },
    postQuantity: 100
};

let person2 = {
    name: "Alice",
    info: {
        country: "Italy",
        age: 25
    }
};

//Write function here

function shortPerson(obj) {
    let {
        name: n,
        info: { country: c, age: a },
        postQuantity: p = 0
    } = obj;

    return {
        n: n,
        c: c,
        a: a,
        p: p
    };
}


console.log(shortPerson(person1));


console.log(shortPerson(person2));
