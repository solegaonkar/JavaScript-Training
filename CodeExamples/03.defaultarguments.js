const f1 = (a = 1, b = 2) => a + b;

console.log(f1());
console.log(f1(2));
console.log(f1((b = 4)));
console.log(f1((b = 4), (a = 5)));
