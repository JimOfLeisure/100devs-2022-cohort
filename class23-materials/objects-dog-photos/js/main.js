//Get a dog photo from the dog.ceo api and place the photo in the DOM

// I started doing this early in class; Leon is using the fetch api, not xmlhttprequest

/*
const xhr = new XMLHttpRequest();

xhr.load(res => {
  const img = document.querySelector('img');
  console.log(res);
});

xhr.open('GET', 'https://dog.ceo/api/breeds/image/random');
*/

fetch('https://dog.ceo/api/breeds/image/random')
  .then(res => res.json())
  .then(data => {
    console.log(data);
    const img = document.querySelector('img');
    img.src = data.message;
  })
  .catch(err => console.err(`error ${err}`));
