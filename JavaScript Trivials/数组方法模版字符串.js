let arr = [{
  id: 1,
  name: '张三'
}, {
  id: 2,
  name: '李四'
}]
let target = arr.find(item => item.id === 2)
console.log(target);

let arr1 = [1, 5, 10, 15]
let index = arr1.findIndex(val => val > 9)
// 只找第一个符合条件的索引
console.log(index);

[1, 2, 3].includes(2) // true

// 模版字符串
let obj = {
  name: 'zhangsan',
  age: 20
}

let html = `
  <div>
    <span>${obj.name}</span>
    <span>${obj.age}</span>
  </div>
`

let sayHello = () => {
  return 'hahaha wsd'
}
let html2 = `我是模版字符串 ${sayHello()}`;
console.log(html2);

let str = 'hello world!'
str.startsWith('hello') // true
str.endsWith('!') // true

'x'.repeat(3) // 'xxx'
'hello'.repeat(2) //'hellohello'
