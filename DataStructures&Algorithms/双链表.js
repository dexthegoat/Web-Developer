function DoubleLinklist() {

  function Node(data) {
    this.data = data
    this.prev = null
    this.next = null
  }

  this.head = null
  this.tail = null
  this.length = 0

  DoubleLinklist.prototype.append = data => {
    let newNode = new Node(data)

    if (this.length === 0) {
      this.tail = newNode
      this.head = newNode
    } else {
      newNode.prev = this.tail
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length += 1
  }

  DoubleLinklist.prototype.toString = () => {
    return this.backwardString()
  }

  //二.forwardString方法
  DoubleLinklist.prototype.forwardString = () => {
    let current = this.tail
    let resultString = ""

    while (current) {
      resultString += current.data + "--"
      current = current.prev
    }
    return resultString
  }

  DoubleLinklist.prototype.backwardString = () => {
    let current = this.head
    let resultString = ""

    while (current) {
      resultString += current.data + "--"
      current = current.next
    }
    return resultString
  }

  DoubleLinklist.prototype.insert = (position, data) => {
    if (position < 0 || position > this.length) return false
    let newNode = new Node(data)

    // 情况1：插入的newNode是第一个节点
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
      // 原链表不为空
    } else {
      // 情况2：position == 0
      if (position === 0) {
        this.head.prev = newNode
        newNode.next = this.head
        this.head = newNode
        // 情况3：position == this.length
      } else if (position === this.length) {
        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode
        // 情况4：0 < position < this.length
      } else {
        let current = this.head
        let index = 0
        while (index++ < position) {
          current = current.next
        }
        // 修改pos位置前后节点变量的指向
        newNode.next = current
        newNode.prev = current.prev
        current.prev.next = newNode
        current.prev = newNode
      }
    }
    this.length += 1
    return true;
  }

  DoubleLinklist.prototype.get = position => {
    if (position < 0 || position >= this.length) {// 获取元素时position不能等于length
      return null
    }

    let current = null
    let index = 0
    // this.length / 2 > position: 从头开始遍历
    if ((this.length / 2) > position) {
      current = this.head
      while (index++ < position) {
        current = current.next
      }
      // this.length / 2 =< position: 从尾开始遍历
    } else {
      current = this.tail
      index = this.length - 1
      while (index-- > position) {
        current = current.prev
      }
    }
    return current.data
  }

  DoubleLinklist.prototype.indexOf = data => {
    let current = this.head
    let index = 0

    while (current) {
      if (current.data === data) {
        return index
      }
      current = current.next
      index += 1
    }
    return -1
  }

  DoubleLinklist.prototype.update = (position, newData) => {
    if (position < 0 || position >= this.length) {
      return false
    }

    let current = this.head
    let index = 0
    //this.length / 2 > position:从头开始遍历
    if (this.length / 2 > position) {
      while (index++ < position) {
        current = current.next
      }
      //this.length / 2 =< position:从尾开始遍历
    } else {
      current = this.tail
      index = this.length - 1
      while (index-- > position) {
        current = current.prev
      }
    }
    current.data = newData
    return true
  }

  DoubleLinklist.prototype.removeAt = position => {
    if (position < 0 || position >= this.length) {
      return null
    }

    //当链表中length == 1
    //情况1：链表只有一个节点
    let current = this.head//定义在最上面方便以下各种情况返回current.data
    if (this.length === 1) {
      this.head = null
      this.tail = null
      //当链表中length > 1
    } else {
      //情况2：删除第一个节点
      if (position === 0) {
        this.head.next.prev = null
        this.head = this.head.next
        //情况3：删除最后一个节点
      } else if (position === this.length - 1) {
        current = this.tail//该情况下返回被删除的最后一个节点
        this.tail.prev.next = null
        this.tail = this.tail.prev
      } else {
        //情况4：删除链表中间的节点
        let index = 0
        while (index++ < position) {
          current = current.next
        }
        current.next.prev = current.prev
        current.prev.next = current.next
      }
    }
    this.length -= 1
    return current.data
  }

  DoubleLinklist.prototype.remove = data => {

    let index = this.indexOf(data)
    return this.removeAt(index)
  }

  DoubleLinklist.prototype.isEmpty = () => {
    return this.length === 0
  }

  DoubleLinklist.prototype.size = () => {
    return this.length
  }

  DoubleLinklist.prototype.getHead = () => {
    return this.head.data
  }

  DoubleLinklist.prototype.getTail = () => {
    return this.tail.data
  }
}
