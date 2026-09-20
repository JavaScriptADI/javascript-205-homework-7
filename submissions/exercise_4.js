const calculator = {
    add :(a, b) => a+b,
    substract : (a, b) => a-b,
    multiply : (a,b) => a *b,
    divide : (a, b) => a/b,
}
console.log (calculator.add (8, 2)) ;

console.log (calculator.substract (8, 2)) ;
console.log (calculator.multiply (8, 2)) ;
console.log (calculator.divide (8, 2)) ;

const operations = [
    calculator.add,
    calculator.substract,
    calculator.multiply,
    calculator.divide,
];

for (let i=0; i < operations.length; i++) {
    console.log(operations[i](20, 5));
}
const plus = calculator.add;
console.log(plus(1, 2));
console.log(calculator.add);
// უპასუხეთ ამ კითხვას: რა განსხვავებაა const plus = calculator.add;-სა და const plus = calculator.add(1, 2);-ს შორის?
//პირველ შემთხვევაში ფუნქციას ვინახავთ, მეორეში კი ფუნქციის შესრულების შედეგს.