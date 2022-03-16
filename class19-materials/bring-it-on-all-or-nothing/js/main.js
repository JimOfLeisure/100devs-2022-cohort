// *Variables*
// Declare a variable, assign it a boolean, and alert the value
let bool = true;
alert(bool);

// Declare a variable, reassign it to your favorite color, and console log the value
let color;
color = "blue";
console.log(color);

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.
function crunchNum(a, b, c, d) {
    return (a + b + c) / d;
}
console.log(crunchNum(1,2,3,4));
// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
function bob(a, b) {
    console.log(Math.pow(a, 2));
}
bob(2,3);

// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string
function boolString(b, s) {
    if (b) {
        alert(s);
    } else {
        console.log(s);
    }
}
boolString(true, 5)
boolString(false, 6)
//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number

function takeNum(n) {
    for (let i=1; i<=n; i++) {
        let out = "";
        if (i % 3 == 0) {
            out += "fizz"
        }
        if (i % 5 == 0) {
            out += "buzz"
        }
        console.log(out || i);
    }
}

takeNum(30);

fizzBuzzToo = n => {
    for(let i=1; i<=n; i++) {
        console.log(`${!(i%3)?'fizz':''}${!(i%5)?'buzz':''}`||i)
    }
}

fizzBuzzToo(30);
