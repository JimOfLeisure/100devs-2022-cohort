//Get a dog photo from the dog.ceo api and place the photo in the DOM

const img = document.querySelector('img');

fetch('https://dog.ceo/api/breeds/image/random')
  .then(res => res.json())
  .then(data => {
    // console.log(data);
    img.src = data.message;
    img.alt = 'image of dog';
  })
  .catch(err => console.err(error));
