function Set() {
  this.items = {}

  Set.prototype.add = value => {
    if (this.has(value)) {
      return false
    }
    this.items[value] = value
    return true
  }

  Set.prototype.has = value => {
    return this.items.hasOwnProperty(value)
  }

  Set.prototype.remove = value => {
    if (!this.has(value)) {
      return false
    }
    delete this.items[value]
    return true;
  }

  Set.prototype.clear = () => {
    this.items = {}
  }

  Set.prototype.size = () => {
    return Object.keys(this.items).length
  }

  Set.prototype.values = () => {
    return Object.keys(this.items)
  }

  Set.prototype.union = otherSet => {
    let union = new Set();
    let values = this.values();

    for (let i = 0; i < values.length; i++) {
      union.add(values[i])
    }
    values = otherSet.values();
    for (let i = 0; i < values.length; i++) {
      union.add(values[i])
    }
    return union;
  }

  Set.prototype.intersection = otherSet => {
    let intersection = new Set()
    let values = this.values()

    for (let i = 0; i < values.length; i++) {
      let item = values[i]
      if (otherSet.has(item)) {
        intersection.add(item)
      }
    }
    return intersection;
  }

  // 差集 x元素存在A中 但不存在B中
  Set.prototype.diff = otherSet => {
    let res = new Set()
    let values = this.values()

    for (let i = 0; i < values.length; i++) {
      let item = values[i]
      if (!otherSet.has(item)) {
        res.add(item)
      }
    }
    return res;
  }

  // 集合A是集合B的子集
  Set.prototype.subSet = otherSet => {
    let values = this.values()

    for (let i = 0; i < values.length; i++) {
      let item = values[i]
      if (!otherSet.has(item)) {
        return false
      }
    }
    return true;
  }

}
