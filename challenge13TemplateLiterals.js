/* CHALLENGE 13 - Template Literals

Create carInfo() function that
will return info about each car.

Car is considered cheap if it's price is <= 20000
Car is considered expensive if it's price is > 20000
*/



let cars = [
    { brand: "Honda", price: 13000 },
    { brand: "Rolls-Royce", price: 120000 }
];

//Wrute carInfo() function here
function carInfo(car) {
    let worth = "";
    // if (car.price <= 20000) {
    //     worth = "a cheap"
    // } else {
    //     worth = "an expensive"
    // }

    worth = car.price <= 20000 ? "a cheap" : "an expensive";

    return `Price of my new ${car.brand} \
is ${car.price}$ and it is \
${worth} car.`
}


cars.forEach(car => console.log(carInfo(car)));

/* Price of my new Honda is 13000$
and it is a cheap car. */


/* Price of my new Rolls-Royce is 120000$
and it is an expensive car. */

