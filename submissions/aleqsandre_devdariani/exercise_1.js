function triple(number) {
    return number * 3;
}

const tripleExpression = function(number) {
    return number * 3;
};

const tripleArrow = (number) => number * 3;

console.log(triple(4), tripleExpression(4), tripleArrow(4));
console.log(tripleArrow);
console.log(tripleArrow(4));