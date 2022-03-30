//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

let numArr = [13, 34, 6, 45, 34, 4];

alert(
  numArr.reduce((acc, cur) => acc + cur),
  0
);

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

function squareAll(numArr) {
  return numArr.map(n => n * n);
}

console.log(squareAll([1, 2, 4, 8]));

//Create a function that takes string
//Print the reverse of that string to the console

const reverseString = s => s.split('').reverse().join('');

console.log(reverseString('string'));

//Create a function that takes in a string
//Alert if the string is a palindrome or not

const isPalindrome = s => {
  reverseString(s) === s ? alert('Palindrome!') : alert('Not palindrome');
};

isPalindrome('leon noel');
isPalindrome('JimOfLeisure');
