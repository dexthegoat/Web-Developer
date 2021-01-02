function PriorityQueue() {

  function QueueElement(elememnt, priority) {
    this.element = elememnt;
    this.priority = priority;
  }

  this.items = [];

  PriorityQueue.prototype.enqueue = function (ele, pri) {
    var qe = new QueueElement(ele, pri);
    if (this.items.length === 0) {
      this.items.push(qe);
    } else {
      let added = false;
      for (let i = 0; i < this.items.length; i++) {
        if (qe.priority < this.items[i].priority) {
          // 把qe放到i的位置 删除0个元素
          this.items.splice(i, 0, qe);
          added = true;
          break;
        }
      }
      if (!added) {
        this.items.push(qe);
      }
    }
  }

  PriorityQueue.prototype.dequeue = function () {
    return this.items.shift();
  }

  PriorityQueue.prototype.front = function () {
    return this.items[0]
  }

  PriorityQueue.prototype.isEmpty = function () {
    return this.items.length === 0;
  }

  PriorityQueue.prototype.size = function () {
    return this.items.length;
  }

  PriorityQueue.prototype.toString = function () {
    var res = '';
    for (var i = 0; i < this.items.length; i++) {
      res += this.items[i].element + '-' + this.items[i].priority + ' '
    }
    return res;
  }
}

// 优先级小的放前面
let pq = new PriorityQueue();
pq.enqueue('abc', 111);
pq.enqueue('asd', 200);
pq.enqueue('ass', 50);
pq.enqueue('zxc', 20);
console.log(pq.toString());
