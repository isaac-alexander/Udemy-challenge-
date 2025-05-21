/* CHALLENGE 19 - Iterate over Object

Create function sumObjectValues() that will sum all values
of the fields that contain numbers.
Ensure that iteration is done only over own properties of the object.
*/



let nums = {
    a: 10,
    b: 20,
    c: "string",
    d: 12
};

//Write code here
function sumObjectValues(object) {
    let total = 0;
    for (let k in object) {
        if (typeof object[k] === "number" && object.hasOwnProperty(k))
            total += object[k];
    }
    return total
}

console.log(sumObjectValues(nums));
