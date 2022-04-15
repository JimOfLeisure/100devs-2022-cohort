//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)
const list = document.querySelector('ul');

function getFetch() {
  const isbn = encodeURIComponent(document.querySelector('input').value);
  console.log(isbn)
  const url = `https://openlibrary.org/isbn/${isbn}.json`

  fetch(url)
    .then(res => { 
      console.log(res);
      return res.json() }) // parse response as JSON
    .then(data => {
      console.log(data)

      const book = document.createElement('li');
      const name = document.createElement('h2');
      book.appendChild(name);
      name.textContent = data.title;
      list.appendChild(book);
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}

