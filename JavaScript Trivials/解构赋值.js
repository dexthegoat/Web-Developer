// 数组解构
let [a, b, c] = [1, 2, 3]
console.log(a);
console.log(b);
console.log(c); // 123

let [foo1] = []
console.log(foo1); // undefined
let [bar, foo2] = [1]
console.log(foo2); // undefined

// 对象解构
let person = {
  name: 'zs',
  age: 20,
  sex: 'male'
}
let {name, age, sex} = person
console.log(name); // zs
console.log(age); // 20
console.log(sex); // male
// 起别名
let {name: myName, age: myAge, sex: mySex} = person
console.log(myName);
console.log(myAge);
console.log(mySex);
