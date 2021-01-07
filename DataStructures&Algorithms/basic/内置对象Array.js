let arr = [1, 2, 3, 4, 5]
console.log(arr[0]);

console.log(arr instanceof Array);
console.log(Array.isArray(arr));
// push pop unshift shift
// 在头追加元素
arr.unshift('red')
console.log(arr);
// shift删头元素

// 排序 reverse sort
let arr2 = [5, 8, 8, 8, 9, 7, 54, 54, 1, 5]
arr2.reverse()
// 升序
arr2.sort((a, b) => {
  return a - b
})
console.log(arr2);
console.log(arr2.indexOf(7));
console.log(arr2.lastIndexOf(8));
console.log(arr2.toString());
console.log(arr2.join('-'));
