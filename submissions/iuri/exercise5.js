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

// console.log("F:", size); 
// `size` is a local variable inside the `if` block. Calling this variable outside the block makes no sense because you cant acsess local variables outside their scope.

// My prediction
// A: blue
// B: 10
// C: red
// D: green 
// E: red


// part B -----------------------------------------------

const prices = [4, 10, 6];
    let total = 0;             //this line must be outside the for loop

for (const price of prices) {
    // let total = 0;
    total = total + price;
}

console.log("Total:", total);


//-----------------------------------------------------


