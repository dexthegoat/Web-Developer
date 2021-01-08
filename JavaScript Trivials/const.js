// 声明常量 常量就是值（内存地址）不可更改
// const也有块级作用域
if (true) {
  const a = 10
  if (true) {
    const a = 20
    console.log(a);
  }
  console.log(a);
}
console.log(a); // a is not defined

// const声明常量时必须赋值

// 常量赋值后 值不能修改
const arr = [100, 200]
arr[0] = 'a'
arr[1] = 'b'
console.log(arr); // 这样可以改
arr = ['a', 'b'] // 这样不行 因为内存地址不可更改
