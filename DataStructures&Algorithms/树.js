function BST() {
  this.root = null

  function Node(key) {
    this.key = key
    this.left = null
    this.right = null
  }

  BST.prototype.insert = key => {
    let newNode = new Node(key)

    if (this.root == null) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }

  BST.prototype.insertNode = (node, newNode) => {
    if (newNode.key < node.key) {
      if (node.left == null) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {
      if (node.right == null) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }

  BST.prototype.preOrder = (handler) => {
    this.privatePreorder(this.root, handler)
  }

  // 闭包就是能够读取其他函数内部变量的函数
  BST.prototype.privatePreorder = (node, handler) => {
    if (node) {
      handler(node.key)
      this.privatePreorder(node.left, handler)
      this.privatePreorder(node.right, handler)
    }
  }

  BST.prototype.inOrder = handler => {
    this.privateInorder(this.root, handler)
  }

  BST.prototype.privateInorder = (node, handler) => {
    if (node) {
      this.privateInorder(node.left, handler)
      handler(node.key)
      this.privateInorder(node.right, handler)
    }
  }

  BST.prototype.postOrder = handler => {
    this.privatePostorder(this.root, handler)
  }

  BST.prototype.privatePostorder = (node, handler) => {
    if (node) {
      this.privatePostorder(node.left, handler)
      this.privatePostorder(node.right, handler)
      handler(node.key)
    }
  }
}

let bst = new BST()
bst.insert(11)
bst.insert(7)
bst.insert(15)
bst.insert(5)
bst.insert(3)
bst.insert(9)
bst.insert(8)
bst.insert(10)
bst.insert(13)
bst.insert(12)
bst.insert(14)
bst.insert(20)
bst.insert(18)
bst.insert(25)
bst.insert(6)
let res = ''
bst.preOrder(key => {
  res += key + ' '
})
console.log(res)
let res2 = ''
bst.inOrder(key => {
  res2 += key + ' '
})
console.log(res2)
let res3 = ''
bst.postOrder(key => {
  res3 += key + ' '
})
console.log(res3)
