//Create an espresso machine ~~constructor~~ class that makes machines with 4 properties and 3 methods

class EspressoMachine {
    constructor(waterLevel, groundsLevel) {
        this.waterLevel = waterLevel;
        this.groundsLevel = groundsLevel;
        this.makeSteam = function () {
            console.log('gurgle gurgle gurgle');
            this.waterLevel--;
        };
        this.makeEspresso = function () {
            console.log('gurgle gurgle gurgle');
            this.groundsLevel--;
            this.waterLevel--;
        };
        this.clean = function () {
            console.log('self-cleaning, somehow');
        };
    }
}

const em = new EspressoMachine(5, 5);
em.makeEspresso();
