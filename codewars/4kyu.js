// https://www.codewars.com/kata/546d15cebed2e10334000ed9
function solveExpression(exp) {
    // handy question mark replacer function
    const f = (str, n) => Number(str.replace(/\?/g, String(n)));
    const opFunc = {
        '-': (a, b) => a - b,
        '+': (a, b) => a + b,
        '*': (a, b) => a * b,
    }
    // Not using regex seemed challenging (I wouldn't use eval)
    const [_match, first, op, second, answer] = exp.match(/^(-?[?\d]+)([-+*])(-?[?\d]+)=(.*)/);
    // check for leading '?'s as there are no leading zeroes
    const matchLeadingZero = /^-?\?[\d?]/;
    const skipZero = matchLeadingZero.test(first) ||
        matchLeadingZero.test(second) ||
        matchLeadingZero.test(answer);
    const knownDigits = new Set([...exp]
        .filter(s => /\d/.test(s))
        .map(s => Number(s))
    );
    const result = [...Array(10)]
        .map((_, i) => i)
        .filter(n => !knownDigits.has(n))
        .find(n => {
            if (n == 0 && skipZero) { return false; }
            return opFunc[op](f(first, n), f(second, n)) === f(answer, n);
        });
    if (result === undefined) {
        return -1;
    }
    return result;
}
