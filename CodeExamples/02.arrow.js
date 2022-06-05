/**
 * Arrow functions explicitly assign function to a variable.
 */

function inv1(x) {
  return x === 0 ? NaN : 1 / x;
}

var f2 = function (x) {
  return x === 0 ? NaN : 1 / x;
};

var f3 = (input) => (x === 0 ? NaN : 1 / x);
