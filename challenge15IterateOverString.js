/* CHALLENGE 15 - Iterate over String

Count the numbers of the lowercase vowel letters in the string.
Vowel letters - a, e, i, o, u
*/



let vowelsCount = 0;
let vowels = ["a", "e", "i", "o", "u"];

let str = "Today is the best day of my life";

// Write code here

// for (let i = 0; i < str.length; i++) {
//     // if (vowels.includes(str[i])) vowelsCount++;
//     if (vowels.indexOf(str[i]) !== -1) vowelsCount++;
// }

for (let s of str) {
    if (vowels.includes(s)) vowelsCount++;
}
console.log(vowelsCount);
