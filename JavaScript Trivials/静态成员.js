function Star(uname, age) {
  this.uname = uname
  this.age = age
  // this.sing = () => {
  //   console.log('i can sing')
  // }
  Star.prototype.sing = () => {
    console.log('i can sing')
  }
}

let ldh = new Star('ldh', 88)
ldh.sing()
Star.sex = 'male' // 静态成员
console.log(Star.sex); // 只能这样访问 不能用实例ldh.sex访问
// 这种es6之前的构造函数语法 很浪费内存
// 每new一个实例 他都会给sing()开辟新的空间 多个实例对象就会开辟多个同一个方法的空间
// ldh.sing === 另一个对象.sing false
// 所以用prototype对象
// 原型的作用：共享方法 不需要开辟新的空间
console.log(ldh.__proto__ === Star.prototype) // true
