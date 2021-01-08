let obj = {
  age: 20,
  say: () => {
    // this 指向window window下没有age属性
    console.log(this.age)
  },
  say2: function () {
    console.log(this.age);
  },
  say3() {
    console.log(this.age);
  }
}
obj.say() // undefined
obj.say2() // 20
obj.say3() // 20
