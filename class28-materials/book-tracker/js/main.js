//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)
const list = document.querySelector('ul');

const keyName = 'bookList';
const bookList = JSON.parse(localStorage.getItem(keyName)) || [];

// TODO: Prevent duplicates
function addBook(book) {
  bookList.push(book);
  localStorage.setItem(keyName, JSON.stringify(bookList))
}

function render() {
  list.innerHTML= '';
  bookList.forEach(bookData => {
    const book = document.createElement('li');
    const name = document.createElement('h2');
    book.appendChild(name);
    name.textContent = bookData.title;
    list.appendChild(book);

  })
}

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
      addBook(data);
      render();
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}

render();
