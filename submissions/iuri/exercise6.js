let score = 0;
const cart = ["Milk"];

const square = (n) => n * n; //pure because it doesnt change anything




const addPoints = (points) => {
    score = score + points;
    return score;
}; // impure because it changes the score variable





const fullName = (first, last) => `${first} ${last}`; //pure because it doesn't change anything



const rollDice = () => Math.floor(Math.random() * 6) + 1; //impure because it uses Math.random



const addToCart = (item) => {
    cart.push(item);
    return cart.length;
}; //impure because it changes the cart arrey



const printSum = (a, b) => {
    console.log(a + b);
};  //impure because it uses console.log 
