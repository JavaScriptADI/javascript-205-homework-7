let color = "red";

if (true) {
    let color = "blue";
    let size = 10;
    console.log("A:", color);
    console.log("B:", size);
}

console.log("C:", color);

function paint() {
    let color = "green";
    console.log("D:", color);
}

paint();
console.log("E:", color);

// My prediction:
// A: blue
// B: 10
// C: red
// D: green
// E: red

// What would happen with F:
// If we added console.log("F:", size); at the end of the if block,
// JavaScript would give an error because size exists only inside the if block.
// It cannot be accessed outside that block.

const prices = [4, 10, 6];

let total = 0;

for (const price of prices) {
    total = total + price;
}

console.log("Total:", total);

// The console.log could not see total because total was declared inside the for block.
// Also, if total stayed inside the loop, it would be reset to 0 on every iteration,
// so the prices would not be added together.