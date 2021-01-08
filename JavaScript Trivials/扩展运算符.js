let arr = [1, 2, 3]
// ...arr // 1, 2, 3
console.log(...arr) // 1 2 3
console.log(1, 2, 3) // 1 2 3

// 合并数组
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let arr3 = [...arr1, ...arr2]
arr1.push(...arr2)
console.log(arr1); // [ 1, 2, 3, 4, 5, 6 ]
console.log(arr3); // [ 1, 2, 3, 4, 5, 6 ]

let fakeArr = {
  '0': 'a',
  '1': 'b',
  '2': 'c',
  length: 3
}
let realArr = Array.from(fakeArr, item => item * 2)
console.log(realArr); // logged [ 'a', 'b', 'c' ] before passing the callback function
