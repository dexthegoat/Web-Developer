// 成员值都是唯一的 不能重复
const s1 = new Set()
console.log(s1);
console.log(s1.size);

const s2 = new Set(['a', 'b'])
console.log(s2); // Set { 'a', 'b' }

const s3 = new Set(['a', 'a', 'b', 'b'])
console.log(s3); // Set { 'a', 'b' }
let arr = [...s3]
// 数组去重
console.log(arr);

const s4 = new Set()
s4.add(1).add(2).add(3).delete(2)
console.log(s4); // 1 3
console.log(s4.has(1)); // true
s4.clear()
console.log(s4.size); // 0

// 从set中取值
const s5 = new Set([1, 2, 3, 4, 5, 6])
s5.forEach(val => console.log(val))
