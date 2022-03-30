// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question

let sentence = 'Am I a question or a human?';

const isQuestion = s => s.at(-1) === '?';
alert(isQuestion(sentence) ? `is a question` : `not a question`);

// NOTE: Leon used String.endsWith('?')

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console

let jobTitles = 'jr. dev senior dev intern jr. dev';
console.log(jobTitles.replace(/jr. dev/g, 'software engineer'));

// NOTE: I checked MDN for String.replace, and it said you have to use regex to match all
//  Then Leon did Strin.ReplaceAll() ... oh thing learned!

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

const rps = () => ['rock', 'paper', 'scissors'][Math.round(Math.random() * 3)];
// console.log(rps());

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function playRps(choice) {
  const bot = rps();
  if (choice === bot) {
    return 'tie';
  }
  if (
    (choice === 'rock' && bot === 'scissors') ||
    (choice === 'paper' && bot === 'rock') ||
    (choice === 'paper' && bot === 'rock')
  ) {
    return 'win';
  }
  return 'lose';
}

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function playLotsOfRps(arrChoices) {
  arrChoices.forEach(e => console.log(playRps(e)));
}

playLotsOfRps([
  'rock',
  'paper',
  'scissors',
  'rock',
  'paper',
  'scissors',
  'rock',
  'paper',
  'scissors',
]);
