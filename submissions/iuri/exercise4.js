const calculator = (a, b) => ({
    add: a + b ,
    subtract: a - b , 
    multiply: a * b,
    divide: a / b 
    
})


console.log(calculator(8 , 2))

const operations = [
    calculator.add,
    calculator.subtract,
    calculator.multiply,
    calculator.divide
]


