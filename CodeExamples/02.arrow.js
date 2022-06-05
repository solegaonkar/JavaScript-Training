/**
 * Arrow functions explicitly assign function to a variable.
 */

function inv1(x) {
  return x === 0 ? NaN : 1 / x;
}

var f2 = function (x) {
  return x === 0 ? NaN : 1 / x;
};

var f3 = (x) => (x === 0 ? NaN : 1 / x);

const f4 = (x) => {
  if (x === 0) return NaN;
  else return 1 / x;
};
