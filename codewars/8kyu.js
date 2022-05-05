// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript
function positiveSum(arr) {
  return arr.reduce((acc, cur) => (cur < 0 ? acc : acc + cur), 0);
}
// Could have done filter first, but just went with a ternary in the callback

// https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript
function squareSum(numbers) {
  return numbers.reduce((acc, cur) => cur * cur + acc, 0);
}

// https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript
function countSheeps(arrayOfSheep) {
  return arrayOfSheep.reduce((acc, cur) => (cur === true ? acc + 1 : acc), 0);
}

// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144
function firstNonConsecutive (arr) {
  const nonConsecutive = arr.find((n, i) => i !== 0 && n - 1 !== arr[i - 1]);
  if (nonConsecutive === undefined) { return null; }
  return nonConsecutive;
}

// https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15
function warnTheSheep(queue) {
  const wolfIdx = queue.indexOf('wolf');
  return wolfIdx === queue.length - 1 ?
    "Pls go away and stop eating my sheep" :
    `Oi! Sheep number ${queue.length - wolfIdx - 1}! You are about to be eaten by a wolf!`
  ;
}

// https://www.codewars.com/kata/5dd462a573ee6d0014ce715b
function sameCase(a, b){
  // Am regex fiend, but trying to force myself not to use it
  // If a character is not a letter then the cases will match each other
  if (a.toLowerCase() === a.toUpperCase() || b.toLowerCase() === b.toUpperCase()) {
    return -1;
  }
  return (a.toLowerCase() === a) === (b.toLowerCase() === b) ? 1 : 0;
}

// https://www.codewars.com/kata/58261acb22be6e2ed800003a/train/javascript
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  }
}

// https://www.codewars.com/kata/52ceafd1f235ce81aa00073a/train/javascript
function plural(n) {
  return n !== 1;
}

// https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript
function countPositivesSumNegatives(input) {
  if (input === null || input.length === 0) {
      return [];
  }
  let posCount = 0;
  let negSum = 0;
  input.forEach(n => {
      if (n > 0) { posCount++; }
      if (n < 0) { negSum += n; }
  })
  return [posCount, negSum];
}

// https://www.codewars.com/kata/57e1e61ba396b3727c000251/train/javascript
function stringClean(s){
  const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  return s.split('')
    .filter(c => !nums.includes(c))
    .join('');
}

// https://www.codewars.com/kata/57a5c31ce298a7e6b7000334/train/javascript
function binToDec(bin){
  return parseInt(bin, 2);
}

// https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b/train/javascript
var humanYearsCatYearsDogYears = function (humanYears) {
  let dogYears = 0;
  let catYears = 0;
  for (let i = 1; i <= humanYears; i++) {
      if (i === 1) {
          catYears += 15;
          dogYears += 15;
      }
      if (i === 2) {
          catYears += 9;
          dogYears += 9;
      }
      if (i > 2) {
          catYears += 4;
          dogYears += 5;
      }
  }
  return [humanYears, catYears, dogYears];
}

// https://www.codewars.com/kata/57f6ad55cca6e045d2000627/train/javascript
function squareOrSquareRoot(array) {
  return array.map(n => {
    const sqrt = Math.sqrt(n);
    if (sqrt === Math.floor(sqrt)) {
      return sqrt;
    }
    return n * n;
  });  
}

// https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript
function betterThanAverage(classPoints, yourPoints) {
  const sum = classPoints.reduce((acc, cur) => acc + cur, 0);
  return yourPoints > sum / classPoints.length;
}

// https://www.codewars.com/kata/55a5befdf16499bffb00007b/train/javascript
function add(a,b){
  return a + b;
}

function divide(a,b){
  return a / b;
}

function multiply(a,b){
  return a * b;
}

function mod(a,b){
  return a % b;
}
 
function exponent(a,b){
  return a ** b;
}
  
function subt(a,b){
  return a - b;
}

// https://www.codewars.com/kata/559ac78160f0be07c200005a/train/javascript
function nameShuffler(str){
  return str.split(' ').reverse().join(' ');
}

// https://www.codewars.com/kata/50654ddff44f800200000007/train/javascript
function solution(a, b){
  const sorted = [a, b].sort((a,b) => a.length - b.length);
  return [sorted[0], sorted[1], sorted[0]].join('');
}

// https://www.codewars.com/kata/595970246c9b8fa0a8000086/train/javascript
function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}

/*
magazines
3 shots each street
pt92 17
m4a1 30
psg1 5
*/

// https://www.codewars.com/kata/5ab52526379d20736b00000e/train/javascript
function magNumber(info){
  const magSize = {
    'PT92' : 17,
    'M4A1' : 30,
    'M16A2' : 30,
    'PSG1' : 5,
  }
  const bulletCount = info[1] * 3;
  const magazineCount = Math.ceil(bulletCount / magSize[info[0]]);
  return magazineCount;
}

//https://www.codewars.com/kata/563b74ddd19a3ad462000054/train/javascript
// first try
function stringy(size) {
  let output = '';
  let i = 0;
  while(i < size) {
    output += i % 2 === 0 ? '1' : '0';
    i++;
  }
  return output;
}

// the flexosaur
const stringy = size => [...new Array(size)].map((_e, i) => '10'[i % 2]).join('');

// https://www.codewars.com/kata/58ca658cc0d6401f2700045f/train/javascript
function findMultiples(integer, limit) {
  let output = [];
  for(let i=1; integer * i <= limit; i++) {
    output.push(integer * i);
  }
  return output;
}

// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/javascript
function removeEveryOther(arr){
  return arr.filter((e, i) => i % 2 === 0 );
}

// https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript
const rps = (p1, p2) => {
  if (p1 === p2) { return 'Draw!'}
  if (
    p1 === 'rock' && p2 == 'scissors' ||
    p1 === 'scissors' && p2 == 'paper' ||
    p1 === 'paper' && p2 == 'rock'
  
   ) { return 'Player 1 won!'}
  return 'Player 2 won!';
};


/*
circle is 2 pi radians
90 deg arc is 0.5 pi radian
2pi radius = circumference
2 * pi * r  = A * 4
(A *4) / 2 * pi
*/

// https://www.codewars.com/kata/5748838ce2fab90b86001b1a/train/javascript
function squareArea(A){
  const radius = A * 4 / (2 * Math.PI);
  return Math.floor(radius * radius * 100) / 100;
}

// https://www.codewars.com/kata/545af3d185166a3dec001190/train/javascript
function eachCons(array, n) {
  let output = [];
  for (let i = 0; i <= array.length - n; i++) {
    output.push(array.slice(i, n + i));
  }
	return output;
}

// https://www.codewars.com/kata/56b29582461215098d00000f/train/javascript
function pipeFix(numbers){
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  const output = [];
  for (let i=min; i <= max; i++) {
    output.push(i);
  }
  return output;
}

// https://www.codewars.com/kata/5713bc89c82eff33c60009f7/train/javascript
function toFreud(string) {
  // code-flexy using falsy "" and && to return either the empty string or the processed string
  return string && string.split(' ').map(() => 'sex').join(' ');
}

// https://www.codewars.com/kata/557cd6882bfa3c8a9f0000c1/train/javascript
function getAge(inputString){
  return Number(inputString[0]);
}

// https://www.codewars.com/kata/523b66342d0c301ae400003b/train/javascript
function multiply(a, b) {
  return a * b;
}

// https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/javascript
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript
function digitize(n) {
  return String(n)
    .split('')
    .map(s => Number(s))
    .reverse();
}