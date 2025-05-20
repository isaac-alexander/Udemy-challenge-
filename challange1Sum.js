const sum = (...args) => { // 1, 3
    let total = 0; //0
    for (const num of args) { //1, 3
        total += num //0 + 1 = 1.. 1 + 3 = 4

    }
    console.log(total); //4

}

sum(1, 3); //4
sum(10, 20, 5); //35
sum(2, 5, 80, 1, 10, 12); //110

