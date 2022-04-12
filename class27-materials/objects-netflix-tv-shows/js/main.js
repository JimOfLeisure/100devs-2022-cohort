//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class TvShow {
  constructor(showName, genre, rating, length) {
    this.showName = showName;
    this.genre = genre;
    this.rating = rating;
    this.length = length;
  }
  play() {
    console.log(`Playing ${this.showName}`);
  }
  pause() {
    console.log('pause');
  }
  subscribe() {
    console.log("Oh you can't really subscribe on Netflix, can you?");
  }
}
