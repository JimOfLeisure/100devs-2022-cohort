//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

function sumAndAlert(nums) {
  alert(
    nums.reduce((acc, cur) => acc + cur),
    0
  );
}

// sumAndAlert([1, 2, 3]);
// sumAndAlert([32, 245, 1, 6, 64, 647, 76, 67, 2, 23, 123, 3, 5, 5, 6, 6, 7, 2]);

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

function squareNums(nums) {
  return nums.map(n => n * n);
}

console.log(squareNums([2, 5, 9]));

//Create a function that takes string
//Print the reverse of that string to the console

const reverseString = s => s.split('').reverse().join('');

console.log(reverseString('Hello'));

//Create a function that takes in a string
//Alert if the string is a palindrome or not

const isPalindrome = s =>
  alert(['Not a palindrome', 'Palindrome!'][Number(s === reverseString(s))]);

isPalindrome('leon noel');
isPalindrome('foo');
