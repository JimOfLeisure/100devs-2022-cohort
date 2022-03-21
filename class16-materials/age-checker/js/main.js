const realConsoleLog = console.log;

//Create a conditonal that checks their age
let age = 20;

function getAge() {
    age = Number(document.querySelector('#danceDanceRevolution').value) || 0;
    // Hack to aviod re-coding above
    console.log = function(s) {
        document.querySelector('p').innerText = s;
    }
    ageResult();
    console.log = realConsoleLog;
}

function ageResult() {
    //If under 16, tell them they can not drive
    if (age < 16) {
        console.log("You cannot drive");
    }
    //If under 18, tell them they can't hate from outside the club, because they can't even get in
    else if (age < 18) {
        console.log("You cannot hate from outside the club 'cause you can't get in");
    }
    //If under 21, tell them they can not drink
    else if (age < 21) {
        console.log("You cannot drink");
    }
    //If under 25, tell them they can not rent cars affordably
    else if (age < 25) {
        console.log("You cannot rent cars affordably");
    }
    //If under 30, tell them they can not rent fancy cars affordably
    else if (age < 30) {
        console.log("You cannot rent fancy cars affordably");
    }

    //If under over 30, tell them there is nothing left to look forward too
    else {
        console.log("You have nothing left to look forward to");
    }
}

ageResult();

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph

document.querySelector('h1').addEventListener('click', getAge)