//Create a dog object that has four properties and three methods

function Dog(breed, color, name, height) {
  this.breed = breed;
  this.color = color;
  this.name = name;
  this.height = height;
  this.bark = function () {
    console.log('woof');
  };
  this.bite = function () {
    console.log('chomp, lawsuit');
  };
  this.chase = function () {
    console.log('run run run');
  };
}

const fido = new Dog('floof', 'white', 'Fido', 3);
