function test() {
  var meg = 'hi'
}

test()

// console.log(msg); // eror

function foo() {
  console.log(age);
  var age = 26
}

foo() // undefined

// hoisting 变量提升
function foo2() {
  var age = 16
  var age = 26
  var age = 36
  console.log(age);
}

foo2() // 36

if (true) {
  var name = 'matt'
  console.log(name); // matt
}
console.log(name); // matt

if (true) {
  let age = 23
  console.log(age); // matt
}
console.log(age); // age is not defined

var name = 'jack'
console.log(window.name); // jack
let name = 'jack'
console.log(window.name);// undefined

let message
console.log(message); // undefined
console.log(typeof message); // undefined
// age isn't declared
console.log(typeof age); // undefined
if (message) {
  // will not execute
}
if (!message) {
  // will execute
}
if (age) {
  // throw a error
}

let car = null
console.log(typeof car); // object
console.log(null == undefined); // true
