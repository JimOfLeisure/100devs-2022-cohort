//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 

function multiplyArrayNums(nums) {
    let product = 1;
    nums.forEach(e => product =     product * e);
    alert(product);
}

multiplyArrayNums([2,2]);
multiplyArrayNums([3,3,3]);
