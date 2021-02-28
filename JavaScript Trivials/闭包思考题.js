let name = 'The Window'
let object = {
  name: 'My Object',
  getNameFunc() {
    console.log(this) // object
    return function () {
      console.log(this) // window
      return this.name // undefined
    }
  },
  getNameFunc2() {
    console.log(this) // object
    return () => {
      console.log(this) // object
      return this.name // 'My Object'
    }
  },
  getNameFunc3: () => {
    console.log(this) // {}
    return function () {
      console.log(this) // window
      return this.name // undefined
    }
  },
  getNameFunc4: () => {
    console.log(this) // {}
    return () => {
      console.log(this) // {}
      return this.name // undefined
    }
  }
}
console.log(object.getNameFunc()())
console.log(object.getNameFunc2()())
console.log(object.getNameFunc3()())
console.log(object.getNameFunc4()())