const sum = (...args) => {
  // args是个数组
  let res = 0
  args.forEach(item => res += item)
  return res
}
console.log(sum(10, 20));
console.log(sum(10, 20, 30));
console.log(sum(10, 20, 30, 40));

let students = ['aaa', 'bvb', 'csc']
let [s1, ...s2] = students
console.log(s1); // aaa
console.log(s2); // [ 'bvb', 'csc' ]
