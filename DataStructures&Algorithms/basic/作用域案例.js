function f1() {
  var num = 123

  function f2() {
    console.log(num);
  }

  f2()
}

var num = 456
f1() // 123
// 案例2
var a = 1

function fn1() {
  var a = 2
  var b = '22'
  fn2()

  function fn2() {
    var a = 3
    fn3()

    function fn3() {
      var a = 4
      console.log(a);
      console.log(b);
    }
  }
}

fn1()
