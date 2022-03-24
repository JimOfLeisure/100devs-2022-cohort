// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console

let drink = '   Iced tea   ';
console.log(drink.trim());

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".

let words = 'I once had an apple with a worm in it';

//FIXME
console.log(words.split(/\s/).find(e => e.toLowerCase === 'apple'));

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function rps() {
  return ['rock', 'paper', 'scissors'][Math.round(Math.random() * 3)];
}
console.log(rps());

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function playRps(choice) {
  const bot = rps();
  console.log(choice, bot);
  if (choice === bot) {
    return 'tie';
  }
  if (choice === 'rock ' && bot === 'scissors') {
    console.log('HIIIIIIIIIIII');
    return 'win';
  }
  if (choice === 'scissors ' && bot === 'paper') {
    return 'win';
  }
  if (choice === 'paper ' && bot === 'rock') {
    return 'win';
  }
  return 'lose';
}

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function playLotsRps(choiceArr) {
  choiceArr.forEach(choice => {
    console.log(playRps(choice));
  });
}

playLotsRps(['rock', 'paper', 'scissors', 'rock', 'paper', 'scissors']);
