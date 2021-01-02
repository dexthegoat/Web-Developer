function LinkedList() {

  function Node(data) {
    this.data = data;
    this.next = null;
  }

  this.head = null;
  this.length = 0;

  LinkedList.prototype.append = function (data) {
    let node = new Node(data);
    if (this.length === 0) {
      this.head = node;
    } else {
      let cur = this.head;
      while (cur.next) {
        cur = cur.next;
      }
      cur.next = node;
    }
    this.length++;
  }

  LinkedList.prototype.toString = function () {
    let cur = this.head;
    let res = ''
    while (cur) {
      res += cur.data + '->';
      cur = cur.next;
    }
    return res;
  }

  LinkedList.prototype.insert = function (data, index) {
    if (index < 0 || index > this.length) return false;
    let newNode = new Node(data);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let pos = 0;
      let cur = this.head;
      let prev = null;
      while (pos++ < index) {
        prev = cur;
        cur = cur.next;
      }
      newNode.next = cur;
      prev.next = newNode;
    }
    this.length++;
    return true;
  }

  LinkedList.prototype.get = function (index) {
    if (index < 0 || index >= this.length) return null;
    let cur = this.head;
    let pos = 0;
    while (pos++ < index) {
      cur = cur.next;
    }
    return cur.data;
  }

  LinkedList.prototype.indexOf = function (data) {
    let cur = this.head;
    let pos = 0;
    while (cur) {
      if (cur.data === data) {
        return pos;
      }
      cur = cur.next;
      pos++;
    }
    return -1;
  }

  LinkedList.prototype.update = function (newData, index) {
    if (index < 0 || index >= this.length) return false;
    let cur = this.head;
    let pos = 0;
    while (pos++ < index) {
      cur = cur.next;
    }
    cur.data = newData;
    return true;
  }

  LinkedList.prototype.removeAt = function (index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let pos = 0;
      let cur = this.head;
      let prev = null;
      while (pos++ < index) {
        prev = cur;
        cur = cur.next;
      }
      prev.next = cur.next;
    }
    this.length--;
    return true;
  }

  LinkedList.prototype.remove = function (data) {
    let pos = this.indexOf(data);
    return this.removeAt(pos);
  }

  LinkedList.prototype.isEmpty = function () {
    return this.length === 0;
  }

  LinkedList.prototype.size = function () {
    return this.length;
  }
}
