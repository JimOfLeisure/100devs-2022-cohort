// Avoiding .filter() and .reduce() as I don't think the book intends that yet
function countBs(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'B') {
      count += 1;
    }
  }
  return count;
}

function countChar(s, char) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === char) {
      count += 1;
    }
  }
  return count;
}
