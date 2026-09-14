const square = n => n * n;

const isAdult = age => age >= 18;

const greet = name => `Hello, ${name}!`;

const area = (width, height) => width * height;


const sayHi = () => "Hi!";


const sign = n => {
    if (n > 0) {
        return "positive";
    } else if (n < 0) {
        return "negative";
    }
    return "zero";
};


// original version returned undefined because it had braces, whioch created block statment
const half = n => n / 2; 


console.log(`square(7): 49`);

console.log(`isAdult(16): false`);

console.log(`greet("Nino"): Hello, Nino!`);

console.log(`area(3, 5): 15`);

console.log(`sayHi(): Hi!`);

console.log(`sign(-4): negative`);

console.log(`sign(0): zero`);

console.log(`half(10): 5`);
