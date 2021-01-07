console.log(num); // num is not defined (error)

// --------------------------------------------
console.log(num); // undefined
var num = 10
// var num 真实的顺序
// console.log(num);
// num = 10

f() // 11
function f() {
  console.log(11)
}
// function f() {     真实的顺序(函数提升)
//   console.log(11)
// }
// f()

func() // is not a function(error)
var func = () => {
  console.log(22)
}
// var func 真实的顺序 所以不能写在上面调用(这种给变量赋值的函数预解析不会函数提升)
// func()
// func = () => {
//   console.log(22)
// }

/*
  JS引擎运行js分为两步 先预解析 再执行代码
  预解析：js引擎会把js里面所有的var 还有 function 提升到当前作用域的最前面
  代码执行：按照代码书写顺序从上往下执行
*/
// 预解析: 变量提升 和 函数提升
// 变量提升是把所有的变量声明提升到当前的作用域最前面 不提升赋值
// 函数提升就是把所有的函数声明提升到当前作用域的最前面 不调用函数
