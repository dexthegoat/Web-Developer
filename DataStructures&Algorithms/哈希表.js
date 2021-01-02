// 数组插入操作效率低 查找效率(基于索引的话非常高) 删除也低
// 解决哈希冲突的两种办法：Separate chaining，Open addressing
// 链地址法是每个数组单元中存储的不再是单个数据 而是一个链表
// 开放地地址法就是寻找空白的位置来放冲突的数据项 (线性探测 二次探测 再哈希法)

function HashTable() {
  this.storage = []
  this.count = 0
  this.limit = 7

  HashTable.prototype.HashFunc = (str, size) => {
    let hashCode = 0
    for (let i = 0; i < str.length; i++) {
      hashCode = 37 * hashCode + str.charCodeAt(i)
    }
    return hashCode % size
  }

  HashTable.prototype.put = (key, val) => {
    let index = this.HashFunc(key, this.limit)
    let bucket = this.storage[index]

    // 没有就new个桶
    if (!bucket) {
      bucket = []
      this.storage[index] = bucket
    }
    // key已存在就替换val
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i]
      if (tuple[0] === key) {
        tuple[1] = val
        return
      }
    }
    // 入
    bucket.push([key, val])
    this.count++
    if (this.count > this.limit * 0.75) {
      this.resize(this.limit * 2)
    }
  }

  HashTable.prototype.get = key => {
    let index = this.HashFunc(key, this.limit)
    let bucket = this.storage[index]

    // undefined === null false
    // undefined == null true
    if (!bucket) {
      return null
    }
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i]
      if (tuple[0] === key) {
        return tuple[1]
      }
    }
    return null
  }

  HashTable.prototype.remove = key => {
    let index = this.HashFunc(key, this.limit)
    let bucket = this.storage[index]

    if (!bucket) {
      return null
    }
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i]
      if (tuple[0] === key) {
        // 在第i这个位置删除1个元素
        bucket.splice(i, 1)
        this.count--
        return tuple[1]
        if (this.limit > 7 && this.count < this.limit * 0.25) {
          this.resize(Math.floor(this.limit / 2))
        }
      }
    }
    return null
  }

  HashTable.prototype.isEmpty = () => {
    return this.count === 0
  }

  HashTable.prototype.size = () => {
    return this.count
  }

  HashTable.prototype.resize = newLimit => {
    let old = this.storage
    this.storage = []
    this.count = 0
    this.limit = newLimit

    for (let i = 0; i < old.length; i++) {
      let bucket = old[i]
      if (!bucket) {
        continue
      }
      for (let j = 0; j < bucket.length; j++) {
        let tuple = bucket[i]
        this.put(tuple[0], tuple[1])
      }
    }
  }


}

let ht = new HashTable()
ht.put('abc', 123)
ht.put('cba', 321)
ht.put('nba', 521)
ht.put('mba', 520)
console.log(ht.get('abc'))
