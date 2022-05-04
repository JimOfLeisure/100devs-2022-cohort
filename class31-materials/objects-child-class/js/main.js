//Create an a class and extend it - Can be anything you would like it to be! 

class Animal {
    constructor(name) {
        this._name = name
    }
    get name() {
        return this._name
    }
    speak() {
        console.log(`${this._name} makes a sound`)
    }
}

class Pig extends Animal {
    constructor(name, breed) {
        super(name);
        this._breed = breed;
    }
    speak() {
        super.speak();
        console.log(`${this._name} says Oink!`);
    }
    get breed() {
        return this._breed
    }
}

const piglet = new Pig('Piglet', 'cartoon');
console.log(piglet.name);
console.log(piglet.breed);
piglet.speak();
