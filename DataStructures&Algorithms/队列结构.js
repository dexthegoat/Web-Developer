// 先进先出 FIFO
function Queue() {
  this.items = [];

  Queue.prototype.enqueue = function (ele) {
    this.items.push(ele);
  }

  Queue.prototype.dequeue = function () {
    return this.items.shift();
  }

  Queue.prototype.front = function () {
    return this.items[0]
  }

  Queue.prototype.isEmpty = function () {
    return this.items.length === 0;
  }

  Queue.prototype.size = function () {
    return this.items.length;
  }

  Queue.prototype.toString = function () {
    var res = '';
    for (var i = 0; i < this.items.length; i++) {
      res += this.items[i] + ' '
    }
    return res;
  }
}

let q = new Queue();
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
console.log(q.toString())
q.dequeue()
console.log(q.toString())
console.log(q)

// const user = 'john_smith';
// const attempts = 5;
//
// console.log('%s 登录失败了 %i 次', user, attempts);
// logs "john_smith 登录失败了 5 次"

// 击鼓传花
function passGame(nameList, num) {
  let queue = new Queue();

  for (var i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i])
  }
  while (queue.size() > 1) {
    for (var i = 0; i < num - 1; i++) {
      queue.enqueue(queue.dequeue())
    }
    queue.dequeue();
  }
  return nameList.indexOf(queue.front());
}
