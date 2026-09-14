function triple(a) {
  return a * 3;
}

const tripleExpression = function (a) {
  return a * 3;
};

const tripleArrow = (a) => a * 3;

console.log(triple(4), tripleExpression(4), tripleArrow(4));
console.log(tripleArrow);
console.log(tripleArrow(4));
