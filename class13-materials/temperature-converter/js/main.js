//Write your pseduo code first! 
/*
    Get value in celsius
    convert from that to fahrenheit
    output
*/

document.querySelector('#theButton').addEventListener('click', convertMe);

function convertMe () {
    const degC = document.querySelector('#celsius').value;
    const degF = degC * 9 / 5 + 32;
    document.querySelector('#output').innerText = degF;
}