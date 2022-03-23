//Arrays

//Create and array of tv shows. Loop through and print each show to the console

const tvShows = ['Breaking Bad', 'Better Call Saul', 'The Expanse', 'Fargo'];

tvShows.forEach(e => console.log(e));

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays

const nums = [1, 5, 7, 3, 8, 4, 2, 7];

console.log(nums.filter(n => n % 2 == 0));

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number

function alertSeconds(arr) {
  const sorted = arr.sort((a, b) => a - b);
  //   alert('' + sorted.at(-2) + ' ' + sorted[1]);
  alert(sorted.at(-2) + sorted[1]);
}

alertSeconds(nums);
