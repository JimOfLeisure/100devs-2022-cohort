// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console

let bestDay = 'Talk Like a Pirate Day';
console.log(bestDay.toUpperCase());

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)

let seeMyChars = 'This is a string thingy';
alert(seeMyChars.slice(-3));

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.

function fiveNumberMath(a, b, c, d, e) {
  alert(Math.abs(100 - (a + b + c + d + e)));
}
fiveNumberMath(-20, -20, -20, -20, -20);

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.

function threeNumberMath(a, b, c) {
  const arr = [a, b, c];
  console.log(Math.min(...arr));
  console.log(Math.max(...arr));
}
threeNumberMath(5, 6, 7);

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.

const coinFlip = () => ['heads', 'tails'][Math.round(Math.random())];

console.log(coinFlip());

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.

function flipManyCoins(n) {
  for (let i = 0; i < n; i++) {
    console.log(coinFlip());
  }
}

flipManyCoins(20);

// Oh, even though I was 1.5 hours late, I joined during the first lab work.
