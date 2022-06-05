/**
 * Spread operator helps us make a shallow copy of an object.
 */

function f1(data) {
  newData = {};
  for (key in data) {
    newData[key] = data[key];
  }
  newData["update"] = "More Data";
  return newData;
}
console.log(f1({ hello: "World" }));

f2 = (data) => ({ ...data, update: "More Data" });
console.log(f2({ hello: "World" }));
