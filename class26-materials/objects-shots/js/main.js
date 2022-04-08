//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

const options = {
  method: 'GET',
  mode: 'no-cors',
};

const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php';

const search = document.querySelector('input');
const img = document.querySelector('img');

document.querySelector('button').addEventListener('click', getDrink);

function getDrink(event) {
  console.log(search.value);
  const url = baseUrl + '?s=' + search.value;
  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      img.src = data.drinks[0].strDrinkThumb;
    })
    .catch(err => console.error(err));
}
