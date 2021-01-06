let message = null
let age
if (message) {
  // will not execute
}
if (!message) {
  // will execute
}
if (age) {
  // will not
}
if (!age) {
  // will execute
}
console.log(isNaN(NaN)); // true
console.log(isNaN(10));// false
console.log(isNaN('10'));// false can be converted to number 10
console.log(isNaN('blue'));// true can't be converted to a number
console.log(isNaN(true));// false can be converted to number 1

let num1 = Number('hello world') //nan
let num2 = Number('') // 0
let num3 = Number('000011') // 11
let num4 = Number(true) // 1

let num5 = parseInt('1234blue') // 1234
let num6 = parseInt('') // nan
let num7 = parseInt('0xA') // 10
let num8 = parseInt(22.5) // 22
let num = parseInt('0xAF', 16) // 175

let a = 10
console.log(a.toString()); // '10' toString()里面可以传几进制

let v1 = 10
let v2 = true
let v3 = null
let v4
console.log(String(v1)); // '10'
console.log(String(v2)); // 'true'
console.log(String(v3)); // 'null'
console.log(String(v1)); // 'undefined'

