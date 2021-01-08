$(function () {
  var a = 'hello'
  let b = 'hi';
  // 1.不存在变量提升
  console.log(c); //undefined 提前解析 但是没赋值
  var c = 'c';
  // let c = 'c'; 没有域解析 会报错 过不了编译

  // 2.同一个作用域下不能重复定义同一个名称
  var d = 1;
  var d = 100;
  console.log(d); // 覆盖了 100 let的话不能同一个名字

  // 3. 有着严格的作用域 var属于函数作用域(在整个函数体内) 块级作用域(一个大括号是一块)
  function fun() {
    var n = 10;
    if (true) {
      var n = 100;
    }
    console.log(n);
  }

  // console.log(n); 拿不到n
  fun(); // 100

  function fun2() {
    let n = 10;
    if (true) {
      let n = 100;
    }
    console.log(n);
  }

  fun2(); // 10

  // const 只读的"常量"->字符串 数字 布尔
  // (数组和对象不算常量 引用类型)
  const w = 100;
  // w = 200; Nooooooooo
  // const r; 这样也不行 const必须初始化一个值
  const obj = {};
  obj.name = 'amy';
  console.log(obj); // works
  const arr = [];
  arr.push(1); // works

});
