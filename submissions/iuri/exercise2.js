// function square(n) {
//     return n * n;
// }

const square = n => n * n


// function isAdult(age) {
//     return age >= 18;
// }

const isAdult = age => age >= 18



// function greet(name) {
//     return `Hello, ${name}!`;
// }


const greet = name => `Hello, ${name}!`;



// function area(width, height) {
//     return width * height;
// }

const area = (width , height)  => width * height


// function sayHi() {
//     return "Hi!";
// }


const sayHi = () => `Hi!`




// function sign(n) {
//     if (n > 0) {
//         return "positive";
//     } else if (n < 0) {
//         return "negative";
//     }
//     return "zero";
// }

const sign = n => n > 0 ? "positive" : (n < 0 ? "negative" : "zero");


const half = n =>  n / 2 ;


console.log(square(7))
console.log(isAdult(16))
console.log(greet("Nino") )
console.log(area(3, 5))
console.log(sign(-4))
console.log(sign(0))
console.log(half(10))