// 数组插入操作效率低 查找效率(基于索引的话非常高) 删除也低
// 解决哈希冲突的两种办法：Separate chaining，Open addressing
// 链地址法是每个数组单元中存储的不再是单个数据 而是一个链表
// 开放地地址法就是寻找空白的位置来放冲突的数据项 (线性探测 二次探测 再哈希法)

function HashTable() {
  this.storage = []
  this.count = 0
  this.limit = 7

  HashTable.prototype.hashFunc = function (str, size) {
    let hashCode = 0

    for (let i = 0; i < str.length; i++) {
      hashCode = 37 * hashCode + str.charCodeAt(i)
    }
    return hashCode % size
  }

  HashTable.prototype.put = function (key, value) {
    let index = this.hashFunc(key, this.limit)

    let bucket = this.storage[index]

    if (bucket == null) {
      bucket = []
      this.storage[index] = bucket
    }

    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i];
      if (tuple[0] === key) {
        tuple[1] = value
        return
      }
    }

    bucket.push([key, value])
    this.count += 1

    if (this.count > this.limit * 0.75) {
      let newSize = this.limit * 2
      let newPrime = this.getPrime(newSize)
      this.resize(newPrime)
    }
  }

  HashTable.prototype.get = function (key) {
    let index = this.hashFunc(key, this.limit)

    let bucket = this.storage[index]

    if (bucket == null) {
      return null
    }

    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i];
      if (tuple[0] === key) {
        return tuple[1]
      }
    }
    return null
  }

  HashTable.prototype.remove = function (key) {
    let index = this.hashFunc(key, this.limit)

    let bucket = this.storage[index]

    if (bucket == null) {
      return null
    }

    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i]
      if (tuple[0] === key) {
        bucket.splice(i, 1)
        this.count -= 1

        if (this.limit > 7 && this.count < this.limit * 0.25) {
          let newSize = Math.floor(this.limit / 2)
          let newPrime = this.getPrime(newSize)
          this.resize(newPrime)
        }
        return tuple[1]
      }
    }
    return null
  }

  HashTable.prototype.isEmpty = function () {
    return this.count === 0
  }

  HashTable.prototype.size = function () {
    return this.count
  }

  HashTable.prototype.resize = function (newLimit) {
    let oldStorage = this.storage

    this.storage = []
    this.count = 0
    this.limit = newLimit

    for (let i = 0; i < oldStorage.length; i++) {
      const bucket = oldStorage[i];

      if (bucket == null) {
        continue
      }

      for (let j = 0; j < bucket.length; j++) {
        const tuple = bucket[j];
        this.put(tuple[0], tuple[1])
      }
    }
  }

  HashTable.prototype.isPrime = function (num) {
    if (num <= 1) {
      return false
    }

    for (var i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  HashTable.prototype.getPrime = function (num) {
    //7*2=14,+1=15,+1=16,+1=17(质数)
    while (!this.isPrime(num)) {
      num++
    }
    return num
  }
}
