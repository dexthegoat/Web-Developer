if (true) {
  let a = 10
  console.log(a); // 10
  if (true) {
    let c = 30
  }
  console.log(c); // c is not defined
}
console.log(a); // a is not defined

// var会让循环时候用的变量变成全局变量 很垃圾 用let i=0
for (var i = 0; i < 10; i++) {

}
console.log(i); // 10

// let声明的变量没有hoisting 只能先声明 再使用
console.log(x); // x is not defined
let x = 20

// let声明的变量有暂时性死区的特性
// 这两个tmp没关系
var tmp = 10
if (true) {
  console.log(tmp); // tmp is not defined
  let tmp = 20
}
