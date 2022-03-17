// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value

let favFood
favFood = "eggs benedict"
alert(favFood)

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let string = "Am software engineer"
alert(string.at(1))

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.

function calc(a, b, c) {
    alert((a / b) * c);
}
calc(2, 3, 4);

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.

function takeNum(n) {
    console.log(Math.cbrt(n));
}
takeNum(27);

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"

function month(s) {
    const summerMonths = [
        "june",
        "july",
        "august",
    ]
    alert(summerMonths.includes(s) ? "YAY" : "Booo");
}
month("june");
month("january");

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.

function loop(n) {
    for (let i=1; i<=n; i+=5) {
        console.log(i);
    }
}
loop(25);
loop(32);
