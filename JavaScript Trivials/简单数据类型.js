let time = null
console.log(typeof time); // Object

// 堆(复杂数据类型)和栈(简单数据类型) 互不干扰
// 复杂数据类型是在栈里存一个地址 然后这个地址指向堆里的数据(真正的数据)

function f(a) {
  // 把变量在栈空间的值复制了一份给形参a 方法内部对形参做任何修改 不会影响外部变量
  a++
  console.log(a);
}

let x = 10
f(x) // 11
console.log(x); // 10

function Person(name) {
  this.name = name
}

function f1(x) {
  console.log(x.name);
  x.name = 'jsy'
  console.log(x.name);
}

let p = new Person('sssss')
console.log(p.name);
f1(p)
console.log(p.name);
