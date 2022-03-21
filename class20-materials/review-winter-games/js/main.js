//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

function gimmeEvens(nums) {
    let out = [];
    nums.forEach(e => e % 2 === 0 && out.push(e));
    return out;
}

console.log(gimmeEvens([1,2,3,4,5,6,7,8,9,5,,35,554,46,647,467,2]));
