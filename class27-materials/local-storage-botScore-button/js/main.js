//Create a button that adds 1 to a botScore stored in localStorage
const keyName = 'botScore';
let botScore = Number(localStorage.getItem(keyName)) || 0;

document.querySelector('button').addEventListener('click', addOne);

function addOne(event) {
  botScore += 1;
  localStorage.setItem(keyName, botScore);
}
