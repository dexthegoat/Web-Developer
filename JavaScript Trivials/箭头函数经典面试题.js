let obj = {
  age: 20,
  say: () => {
    // this 指向window window下没有age属性
    console.log(this)
    console.log(this.age)
  },
  say2: function () {
    console.log(this)
    console.log(this.age);
  },
  say3() {
    console.log(this.age);
  }
};
// 箭头函数虽然被定义在了对象内 但是对象不能产生作用域 实际上还是被定义在了全局 this => window
obj.say() // undefined
obj.say2() // 20
obj.say3() // 20
