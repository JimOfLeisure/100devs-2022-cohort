// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".

function respondToArray(arr) {
    if (arr[0] < arr.at(-1)) {
        alert("Hi");
    } else if (arr[0] > arr[arr.length - 1]) {
        alert("Bye");
    } else {
        alert("We close in an hour");
    }
}

respondToArray([1,2,2,2,22,50]);
respondToArray([100,2,22,50]);
respondToArray([50,2,2,33,3,3,2,22,50]);
