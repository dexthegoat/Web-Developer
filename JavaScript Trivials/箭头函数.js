const fn = () => {
  console.log('123');
}
fn()

const sum = (n1, n2) => n1 + n2
console.log(sum(10, 20))

const fn2 = v => console.log(v)
fn2('jsy')

// 箭头函数没有自己的this 他被定义在哪 this就指向哪
function f() {
  console.log(this)
  return () => {
    console.log(this)
  }
}

const obj = {name: '张三'}
// call让f函数的this绑定了obj
const resFn = f.call(obj)
resFn() // 输出了2次obj对象
