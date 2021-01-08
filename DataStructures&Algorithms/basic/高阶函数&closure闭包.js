function fn(a, b, callback) {
  console.log(a + b)
  callback && callback()
}
fn(1, 2, () => console.log('我最后打印'))

// $('div').animate({
//   left: 500
// }, () => {
//   $('div').css('backgroundColor', 'red')
// })

// 闭包
// f1函数访问了另外一个函数f里面的局部变量num
function f() {
  let num = 10
  function f1() {
    console.log(num)
  }
  f1()
}
f()

// 如何在全局作用域访问局部作用域的变量?
function x() {
  let num = 10
  // function x1() {
  //   console.log(num)
  // }
  // return x1
  return () => {
    console.log(num)
  }
}
let whatever = x()
whatever()
// 相当于
// let whatever = function x1() {
//   console.log(num)
// }
