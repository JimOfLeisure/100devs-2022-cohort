//Create a function that grabs the number of snacks from the input and tells you to stop that many times

function snack() {
    const n = Number(document.querySelector('input').value) || 0;
    for (let i=0; i<n; i++) {
        console.log('You can stop snacking!');
    }
}

document.querySelector('#help').addEventListener('click', snack);