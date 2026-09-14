const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a -b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a /b
};

console.log(`add: ${calculator.add(8, 2)}`);

console.log(`subtract: ${calculator.subtract(8, 2)}`);

console.log(`multiply: ${calculator.multiply(8, 2)}`);

console.log(`divide: ${calculator.divide(8, 2)}`);


const operations = [calculator.add, calculator.subtract, 
    calculator.multiply, calculator.divide];

const num1 = 20;
const num2 = 5;

for (let i = 0; i < operations.length; i++) {
    const opperFunction = operations[i];
    console.log(opperFunction(num1, num2));   
}

const plus = calculator.add;
console.log(plus(1,2));
console.log(calculator.add);

