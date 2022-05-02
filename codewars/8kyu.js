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
