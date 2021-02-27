function fn(a, b, callback, callback2) {
  console.log(a + b)
  callback && callback()
}

fn(1, 2, function () {
  console.log('我最后打印' + this)
})

// $('div').animate({
//   left: 500
// }, () => {
//   $('div').css('backgroundColor', 'red')
// })

// 闭包指有权访问另一个函数作用域中的变量的函数
// 闭包的主要作用：是为了延伸变量的作用范围
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
