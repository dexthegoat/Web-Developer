$(function () {
  // 简化了函数的定义
  let f = v => v; // 变量名 = 参数 => 返回值（函数体）
  // var f = function (v) {
  //   return v;
  // }
  f(10); // 10

  var a = function () {
    return 123;
  }
  let f2 = () => 123;

  let f3 = (n1, n2) => n1 + n2;

  // 数据结构 set map
  // set类似于数组 成员是唯一的
  const s = new Set();
  s.add(1).add(2).add(3).add(2); // 123 重复的替换掉
  // 数组去重
  var arr2 = [2, 3, 4, 4, 4, 4, 5, 5, 6, 6, 7];
  var arr3 = [...new Set(arr2)];
  console.log(arr3);

  // map类似于对象 键可以是任何类型(比对象灵活)
  const m = new Map();
  m.set('name', 'amy').set('age', 18).set(12, 12);
  // for of循环
  for (let [key, value] of m) {

  }
});
