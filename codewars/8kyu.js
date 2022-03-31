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
