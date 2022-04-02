/*
    7 kyu kata:
        https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript
    my solution:
        https://www.codewars.com/kata/reviews/5485d20fd8325e250a00013e/groups/623bfa8bf3fc160001b7b252
*/

function descendingOrder(n) {
  return Number(
    String(n)
      .split('')
      .sort((a, b) => b.localeCompare(a))
      .join('')
  );
}
/*
  Strategy:
  - Convert n to string
  - Split into character array
  - Sort the character array
  - Join back to a string
  - Cast as number
*/

// https://www.codewars.com/kata/5663f5305102699bad000056/train/javascript
function mxdiflg(a1, a2) {
  return a1.reduce((acc, x) => {
    const maxDiff = a2.reduce((a, y) => {
      const diff = Math.abs(y.length - x.length);
      return diff > a ? diff : a;
    }, -1);
    return maxDiff > acc ? maxDiff : acc;
  }, -1);
}
/*
  Nested .reduce methods with -1 initializer
  So empty arr will return -1
  each a1 string (x) calculates the maxDiff of each a2 (y) length
  Each accumulator is the largest difference
*/
