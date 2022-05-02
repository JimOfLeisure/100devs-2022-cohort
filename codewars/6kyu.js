// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript
function high(str) {
    const zero = 'a'.charCodeAt() - 1;
    const score = word => [...word].reduce((acc, cur) => acc + cur.charCodeAt() - zero, 0);
    return str.split(' ').reduce((acc, cur) => {
        const accScore = score(acc);
        const curScore = score(cur);
        return curScore > accScore ? cur : acc;
    }, '');
}

// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
// first solution
function sortArray(array) {
    const isEven = n => (n % 2 + 2) % 2 == 0;
    let sortedOdds = array.filter(e => !isEven(e)).sort((a, b) => a - b);
    let i = 0;
    return array.map(e => isEven(e) ? e : sortedOdds[i++]);
}

// second solution
function sortArray(array) {
    // Wanted to try out the iterator ... that was not as straightforward as I imagined
    // argh, modulus of negatives I think is sinking me ... fixed
    let odds = array.filter(n => (n % 2 + 2) % 2 == 1).sort((a, b) => a - b)[Symbol.iterator]();
    return array.map(n => n % 2 === 0 ? n : odds.next().value);
}

// https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript
function comp(array1, array2){
    if (!(array1 && array2)) { return false; }
    const sorted2 = array2.sort((a, b) => a - b);
    return array1.sort((a, b) => a - b).every((e, i) => e * e === sorted2[i]);
  }
  