let o = {
  name: 'Andy'
}

function fn(a, b) {
  console.log(this)
  console.log(a + ' ' + b)
}

fn.call(o, 1, 2) // this -> o

function Father(uname, age, sex) {
  this.uname = uname;
  this.age = age;
  this.sex = sex;
}

function Son(uname, age, sex) {
  Father.call(this, uname, age, sex)
}

let son = new Son('a', 24, 'Male')
console.log(son)