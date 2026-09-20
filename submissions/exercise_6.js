let score = 0;
const cart = ["Milk"];

const square = (n) => n * n;
// Pure — it only uses its input and returns a result without changing anything outside the function.

const addPoints = (points) => {
    score = score + points;
    return score;
};
// Impure — it changes the external variable score.

const fullName = (first, last) => `${first} ${last}`;
// Pure — it only uses its parameters and returns a result without changing external data.

const rollDice = () => Math.floor(Math.random() * 6) + 1;
// Impure — it uses Math.random(), so the same input can produce different results.

const addToCart = (item) => {
    cart.push(item);
    return cart.length;
};
// Impure — it changes the external cart array.

const printSum = (a, b) => {
    console.log(a + b);
};
// Impure — it produces a side effect by printing to the console.