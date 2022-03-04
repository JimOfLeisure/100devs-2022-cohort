//--- Easy
//create a variable and assign it a number
let foo = 5;
//minus 10 from that number
foo -= 10;
//print that number to the console
console.log(foo);
//--- Medium
//create a variable that holds a value from the input
let bar = Number.parseFloat(document.querySelector('#danceDanceRevolution').value) || 0;
//add 25 to that number
bar += 25;
//alert that number
alert(bar);
//--- Hard
//create a variable that holds the h1
let baz = document.querySelector('h1').innerText;
//add an event listener to that element that console logs the sum of the two previous variables
document.querySelector('h1').addEventListener('click', go);

function go () {
    console.log(foo + bar);
}