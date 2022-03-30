//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods

function MakeSkater(sponsor, rank, wins, name, bestTrick) {
  this.sponsor = sponsor || 'Nike';
  this.rank = rank || 'novice';
  this.wins = wins || 0;
  this.name = name || 'skater';
  this.bestTrick = bestTrick || 'Ollie';
  this.skate = () => console.log(`${this.name} skates for ${this.sponsor}`);
  this.trick = () => console.log(`${this.name} does the ${this.bestTrick}`);
  this.extreme = () => console.log(`${this.name} goes EXTREME`);
}

const pat = new MakeSkater();
const sam = new MakeSkater('Reebok', 'pro', 5, 'Sam', 'really high jump');
