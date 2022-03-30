// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript
function positiveSum(arr) {
  return arr.reduce((acc, cur) => (cur < 0 ? acc : acc + cur), 0);
}
// Could have done filter first, but just went with a ternary in the callback
