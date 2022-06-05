/**
 * Destructuring allows us to access fields within the object without explicitly referring to the object
 */

// This is bad code

function badPrintMessage(user) {
  console.log("Message: " + user["message"]);
}

function badSayHello(user) {
  console.log("Hello " + user["firstName"]);
}

function badCode(firstName, lastName, message) {
  var user = { firstName: firstName, lastName: lastName, message: message };
  console.log(user);
  badSayHello(user);
  badPrintMessage(user);
}

// This is clean code

const cleanPrintMessage = ({ message }) => console.log(`Message: ${message}`);

const cleanSayHello = ({ firstName }) => console.log(`Hello ${firstName}`);

const cleanCode = (firstName, lastName, message) => {
  let user = { firstName, lastName, message };
  console.log(user);
  cleanSayHello(user);
  cleanPrintMessage(user);
};

var firstName = "Vikas";
var lastName = "Solegaonkar";
var message = "Hello World";

cleanCode(firstName, lastName, message);
console.log("------------------");
badCode(firstName, lastName, message);
