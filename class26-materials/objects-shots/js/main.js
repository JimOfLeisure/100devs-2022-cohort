//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

const options = {
  method: 'GET',
  mode: 'no-cors',
};

const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php';

const search = document.querySelector('input');
const img = document.querySelector('img');
const heading = document.querySelector('h2');
const instructions = document.querySelector('#instructions');

document.querySelector('button').addEventListener('click', getDrink);

function getDrink(event) {
  console.log(search.value);
  const url = baseUrl + '?s=' + search.value;
  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      const drink = data.drinks[0];
      img.src = drink.strDrinkThumb;
      heading.innerText = drink.strDrink;
      instructions.innerText = drink.strInstructions;
    })
    .catch(err => console.error(err));
}

/*
    HOMEWORK

    - NASA Picture of day API working

    - Find 3 public APIs, build 3 simple apps
    - Handle spaces in drink names
    - Push: carousel cycle through drinks


*/
