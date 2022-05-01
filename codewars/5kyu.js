// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39
function f(fn, n) { if (fn) { return fn(n) }; return n }
function zero(fn) { return f(fn, 0) }
function one(fn) { return f(fn, 1) }
function two(fn) { return f(fn, 2) }
function three(fn) { return f(fn, 3) }
function four(fn) { return f(fn, 4) }
function five(fn) { return f(fn, 5) }
function six(fn) { return f(fn, 6) }
function seven(fn) { return f(fn, 7) }
function eight(fn) { return f(fn, 8) }
function nine(fn) { return f(fn, 9) }

function plus(n) { return function (left) { return left + n } }
function minus(n) { return function (left) { return left - n } }
function times(n) { return function (left) { return left * n } }
function dividedBy(n) { return function (left) { return Math.floor(left / n) } }
