let score = 0;
const cart = ["Milk"];

const square = (n) => n * n; 
// pure: returns value directly.

const addPoints = (points) => {  
    score = score + points;
    return score;
}; // impure: changes variable outside of braces

const fullName = (first, last) => `${first} ${last}`;
// pure: returns value directly.

const rollDice = () => Math.floor(Math.random() * 6) + 1;
// impure: code containig math random is always impure.

const addToCart = (item) => {
    cart.push(item);
    return cart.length;
};
// impure: changes variable outside of braces

const printSum = (a, b) => {
    console.log(a + b);
}; 
// i dont know :)


const addPointsPure = (currentScore, points) => currentScore + points;

const withItem = (list, item) => [...list, item];

const bigger = withItem(cart, "Bread");

console.log(`addPointsPure(0, 5): ${addPointsPure(0, 5)}`);
console.log(`addPointsPure(0, 5): ${addPointsPure(0, 5)}`);

console.log(`score: ${score}`);

console.log('cart:', cart);
console.log('bigger:', bigger);