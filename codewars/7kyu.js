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
function pattern(n) {
  var output = "";
  for (let i = 0; i < n; i++) {
    output += `1${'*'.repeat(i)}${i > 0 ? i + 1 : ''}\n`;
  }
  // I am not proud of this, but it will do for now
  output = output.slice(0, -1);
  return output;
}

// https://www.codewars.com/kata/545a4c5a61aa4c6916000755
function gimme(triplet) {
  const sorted = [...triplet].sort((a, b) => a - b);
  console.log(sorted[1])
  return triplet.reduce((acc, cur, i) => cur === sorted[1] ? i : acc, null);
}

// https://www.codewars.com/kata/5663f5305102699bad000056
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

// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript
function disemvowel(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return str.split('')
    .filter(c => !vowels.includes(c.toLowerCase()))
    .join('');
}

// https://www.codewars.com/kata/5680781b6b7c2be860000036/train/javascript
function vowelIndices(word) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  return word.split('')
    .reduce((acc, cur, i) => vowels.includes(cur.toLowerCase()) ? [...acc, i + 1] : acc, []);
}

// flexasaur try 2
// ignore me, I'm just playin around
const vowelIndices = w => Array.from(w, (c, i) => 'aeiouyAEIOUY'.includes(c) && i + 1).filter(Boolean);

// https://www.codewars.com/kata/59ad7d2e07157af687000070
// CodeWars grouped my solution with a one-liner, and I'm salty about it
function sentencify(words) {
  const str = words.join(' ');
  return str[0].toUpperCase() + str.slice(1) + '.';
}

// https://www.codewars.com/kata/5656b6906de340bd1b0000ac
function longest(s1, s2) {
  const both = s1 + s2;
  const unique = new Set(both);
  return Array.from(unique)
    .sort(String.localeCompare)
    .join('');
}

// actually first try, a bit flex-y
function longest(s1, s2) {
  return [...new Set([...s1, ...s2])]
    .sort(String.localeCompare)
    .join('');
}

// https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c/solutions/javascript
function sortByLength(array) {
  return array.sort((a, b) => a.length - b.length);
};

// https://www.codewars.com/kata/59778cb1b061e877c50000cc/train/javascript

function arrAdder(arr) {
  const outArr = [];
  for (let i = 0; i < arr[0].length; i++) {
    outArr.push(arr.map(a => a[i] || '').join(''));
  }
  return outArr.join(" ");
}

// https://www.codewars.com/kata/57ee99a16c8df7b02d00045f/train/javascript
"use strict";

function flattenAndSort(array) {
  return array.reduce((acc, cur) => [...acc, ...cur], [])
    .sort((a, b) => a - b);
}