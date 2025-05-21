/*

Rewrite the code below using ES6 Classes
*/



// function Fruit(title, price) {
//     this.title = title;
//     this.price = price;
// }

// Fruit.prototype.priceInfo = function () {
//     return `Price of the ${this.title} is \
//     ${this.price}$`;
// };

class Fruit {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    priceInfo() {
        return `Price of the ${this.title} is \
${this.price}$`;
    }
}


let apple = new Fruit("Apple", 2);
console.log(apple.priceInfo());

let orange = new Fruit("Orange", 3);
console.log(orange.priceInfo());
