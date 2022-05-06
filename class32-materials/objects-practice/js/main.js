// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism 

class Contractor {
    constructor(name, rate) {
        this._name = name;
        this._rate = rate;
    }
    get name() { return this._name }
    get rate() { return this._rate }
    bill(hours) {
        console.log(`For ${hours} work, your total is $${this.rate * hours}`);
    }
}

class FrontEndContractor extends Contractor {
    constructor(name, rate, framework) {
        super(name, rate);
        this._framework = framework;
    }
    get framework() { return this._framework }
}

class BackEndContractor extends Contractor {
    constructor(name, rate, framework) {
        super(name, rate);
        this._framework = framework;
    }
    get framework() { return this._framework }
}

const jim = new FrontEndContractor('Jim', 3.35, 'React'); // 1980s minimum wage, yo
jim.bill(5);



















/* for peeking if needed: 
class Contractor{
    constructor(name,role){
        this._name = name
        this._role = role
    }
    get name(){
        return this._name
    }
    get role(){
        return this._role
    }
    sayHello(){
        console.log(`Hello, I am on the ${this._role} team at #100Devs!`)
    }
}
class Front extends Contractor{
    constructor(name,role,tech){
        super(name,role)
        this._tech = tech
    }
    get tech(){
        return this._tech
    }
    sayHello(){
        console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
    }
}
class Back extends Contractor{
    constructor(name,role,tech){
        super(name,role)
        this._tech = tech
    }
    get tech(){
        return this._tech
    }
    sayHello(){
        console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
    }
}
let bob = new Contractor('Bob','Front-end')
let simba = new Front('Simba','Front-end','React')
let machi = new Back('The Machine','Back-end','Node')

let agency = [bob,simba,machi]

for(person of agency){
    person.sayHello()
}
*/