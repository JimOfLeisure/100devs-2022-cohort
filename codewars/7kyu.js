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
