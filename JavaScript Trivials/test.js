let obj = {
  name: 'jsy',
  sex: 'male',
  age: 24,
  sayHi(msg) {
    if (!msg) {
      return 'null'
    } else {
      console.log(msg)
    }
  },
  sayHi2: msg => {
    console.log(msg)
  }
}

console.log(obj.age)
console.log(obj.name)
console.log(obj.sayHi('222'))
console.log(obj.sayHi2('222'))
console.log(obj)