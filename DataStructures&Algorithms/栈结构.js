// 受限的线性结构 LIFO(后进先出)
function Stack() {
  this.items = [];

  Stack.prototype.push = function (element) {
    this.items.push(element);
  }

  Stack.prototype.pop = function () {
    return this.items.pop();
  }

  Stack.prototype.peek = function () {
    return this.items[this.items.length - 1];
  }

  Stack.prototype.isEmpty = function () {
    return this.items.length === 0;
  }

  Stack.prototype.size = function () {
    return this.items.length;
  }

  Stack.prototype.toString = function () {
    var res = '';
    for (var i = 0; i < this.items.length; i++) {
      res += this.items[i] + ' '
    }
    return res;
  }
}

var s = new Stack();
s.push(20);
s.push(100);
s.push(77);
console.log(s.toString());
console.log(s.peek());
console.log(s.pop());
console.log(s.toString());

// 十进制转二进制
function dec2bin(num) {
  var stack = new Stack()

  while (num > 0) {
    stack.push(num % 2)
    num = Math.floor(num / 2)
  }
  var res = ''
  while (!stack.isEmpty()) {
    res += stack.pop()
  }
  return res;
}

console.log(dec2bin(100));
