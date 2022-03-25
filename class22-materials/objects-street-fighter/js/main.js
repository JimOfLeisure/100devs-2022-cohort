//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function StreetFighter(name, height, speed, strength) {
  this.name = name || 'Mysterious Hero';
  this.height = height || 6;
  this.speed = speed | 5;
  this.strength = strength || 5;
  this.punch = () => {
    console.log('Hiyah!');
  };
  this.kick = () => {
    console.log('Oof');
  };
  this.dodge = () => {
    console.log('Missed me!');
  };
}

const link = new StreetFighter('Link', 4);
const pikachu = new StreetFighter('Pikachu', 3, 8, 4);

console.log(link, pikachu);
console.log(new StreetFighter());
