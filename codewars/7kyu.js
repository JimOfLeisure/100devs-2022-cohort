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

// https://www.codewars.com/kata/54fb853b2c8785dd5e000957
function chain(input, fs) {
  return fs.reduce((acc, cur) => cur(acc), input);
}

// https://www.codewars.com/kata/5631213916d70a0979000066
function pattern(n){
  var output="";
   for (let i=0; i<n; i++) {
     output += `1${'*'.repeat(i)}${i > 0 ? i + 1 : ''}\n`;
   }
   // I am not proud of this, but it will do for now
   output = output.slice(0,-1);
  return output;
}

// https://www.codewars.com/kata/545a4c5a61aa4c6916000755
function gimme (triplet) {
  const sorted = [...triplet].sort((a,b) => a-b);
  console.log(sorted[1])
  return triplet.reduce((acc, cur, i) => cur === sorted[1] ? i : acc, null);
}

// https://www.codewars.com/kata/5663f5305102699bad000056
function mxdiflg(a1, a2) {
  return a1.reduce((acc, x) => {
    const maxDiff = a2.reduce((a, y) => {
      const diff = Math.abs(y.length - x.length );
      return diff > a ? diff : a;
    } , -1);
    return maxDiff > acc ? maxDiff : acc;
  }, -1);
}
/*
  Nested .reduce methods with -1 initializer
  So empty arr will return -1
  each a1 string (x) calculates the maxDiff of each a2 (y) length
  Each accumulator is the largest difference
*/

// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript
function disemvowel(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return str.split('')
    .filter(c => !vowels.includes(c.toLowerCase()))
    .join('');
}
