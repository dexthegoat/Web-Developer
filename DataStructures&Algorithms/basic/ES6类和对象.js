class Star {
  // new执行
  constructor(uname, age) {
    this.uname = uname
    this.age = age
  }
  sing(song) {
    console.log(this.uname + ' sing sing sing ' + song)
  }
}

let ldh = new Star('ldh', 88)
ldh.sing('sb')

class subStar extends Star {
  constructor(uname, age) {
    super(uname, age);
  }

  sing(song) {
    super.sing(song)
  }

  dance() {

  }
}
let son = new subStar('a', 2)
son.sing('aaa')

// constructor和sing()里面的this指向的都是实例
// 一般都是谁调用 this就指向谁

