const f1 = (a = 1, b = 2) => a + b;

console.log(f1());
console.log(f1(1));
console.log(f1((a = 3), (b = 4)));
