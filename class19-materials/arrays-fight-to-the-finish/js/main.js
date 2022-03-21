//Create an array of movie titles. Loop through the array and each element to the h2.
let movies = ['Star Wars', 'Empire Strikes Back', 'Return of the Jedi']

movies.forEach((e, i) => document.querySelector('h2').innerText += e);

//Create an array of numbers. Loop through the array and three to each number and replace the old number.

let nums = [1, 2, 3, 5, 7, 923];

nums.forEach((e, i, a) => a[i] = e + 3)

//Find the average of all the numbers from question three

let sum = 0
nums.forEach(e => sum += e);
console.log(sum/nums.length);