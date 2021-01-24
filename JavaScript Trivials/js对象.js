const obj1 = {
  uname: 'jsy',
  age: 24,
  sex: 'male',
  sayHi: () => {
    console.log('hi')
  }
}

console.log(obj1.uname);
console.log(obj1['age']);
obj1.sayHi();

const obj2 = {};
obj2.uname = 'jsy'
obj2.age = 24
obj2.sex = 'male'
obj2.sayHi = () => {
  console.log('hi');
}

// 一次想创建多个对象 就用构造函数创造对象
function Stars(uname, age, sex) {
  this.uname = uname
  this.age = age
  this.sex = sex
  this.sing = songs => {
    console.log(songs);
  }
}

let ldh = new Stars('a', 24, 'female')
let xxx = new Stars('aa', 22, 'unknown')
ldh.sing('冰雨')
console.log(ldh.uname);
console.log(ldh.age);

// 遍历对象的属性
for (let k in ldh) {
  console.log(k) // 属性名
  console.log(ldh[k]) // 属性值
}

for (let k of ldh) {
  // ...
}

const nameKey = 'name'
const ageKey = 'age'
const jobKey = 'job'

let person = {
  [nameKey]: 'jsy',
  [ageKey]: 24,
  [jobKey]: 'Web developer',
  sayName(name) {
    console.log(name)
  }
}
person.sayName('Mike')

