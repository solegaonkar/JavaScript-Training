/**
 * JavaScript provides full support for Object Oriented programming.
 */

class A {
  className = "A";
  constructor() {
    console.log(`${this.className}: Constructror of Class A`);
  }

  print = (msg) => console.log(`${this.className} : ${msg}`);
}

class B extends A {
  className = "B";
  constructor() {
    super();
    console.log(`${this.className}: Constructror of Class B`);
  }
}

var a = new A();
console.log("");
var b = new B();
console.log("");
a.print("first message");
console.log("");
b.print("second message");
