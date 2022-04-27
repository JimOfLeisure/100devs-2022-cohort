//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console. 

function reverselist(list) {
    console.log(list.reverse());
}
reverselist([1,2,3]);

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

function twoArrs(a, b) {
    let aSum = a.reduce((acc, cur) => acc += cur**2, 0);
    let bSum = b.reduce((acc, cur) => acc += cur**3, 0);
    return a > b;
}

console.log(twoArrs([5, 5], [2, 2]));

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

function indexMult(arr) {
    return arr.map((e, i) => e * i);
}

console.log(indexMult([5,5,5]));

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.

function thisFunc(arr) {
    return arr.reduce((acc, cur) => acc + Number(cur), 0);
}

console.log(thisFunc([1, '1', '', '5']));
