/**
 * The scope for a var is functional. It begins even before it is declared. Hence, var can be redeclared.
 */

var a = 0;
let b = 0;

function fa() {
  a = a + 1;
  console.log(a);
  // var a;
  // console.log(a);
}
fa();

function fb() {
  b = b + 1;
  console.log(b);
  // let b;
  // console.log(b);
}
fb();
