const square = (n) => n ** 2;

const isAdult = (age) => age >= 18;

const greet = (name) => `hello, ${name}`;

const area = (width, height) => width * height;

const sayHi = () => "HI!";

const sign = (n) => {
  if (n > 0) {
    return "positive";
  } else if (n < 0) {
    return "negative";
  }
  return "zero";
};

const half = (n) => {
  return n / 2;
};

console.log(square(7));
console.log(isAdult(16));
console.log(greet("Nino"));
console.log(area(3, 5));
console.log(sayHi());
console.log(sign(-4));
console.log(sign(0));
console.log(half(10));
