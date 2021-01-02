var arr = [1, 2];
arr.indexOf(1); //0
arr.indexOf(10); //-1

var arr = [1, 2, 3, 4, 2];
arr.lastIndexOf(2); // 4

var arr = [1, 2, 3, 4, 5, 6];
arr.slice(0, 2)    //[1, 2] 只返回索引0,1位置的元素

var copyArr = arr.slice();
copyArr;   //[1, 2, 3, 4, 5, 6]

var arr1 = [1, 2, 3, 4, 5, 6];
var arr2 = ['a', 'b', 'c'];
var arr3 = arr1.concat(arr2);
arr3;   //[1, 2, 3, 4, 5, 6, "a", "b", "c"]

var arr1 = [1, 2, 3];
var arr2 = arr1.concat(66, 'abc', true, [10, 20], [30, [31, 32]], {x: 100});
arr2;  //[1, 2, 3, 66, "abc", true, 10, 20, 30, [31,32], {x:100}]

var arr = [1, 2, 3];
arr.join('*')   //"1*2*3"

var arr = [1, 2, 3];
arr.toString() // "1,2,3"

var arr = [1, 2, 3];
arr.valueOf() // [1, 2, 3]

var arr = [1, 2, 3];
arr.map(function (elem) {
  return elem * 2;
});
//[2, 4, 6, 8]
arr; //[1, 2, 3]

arr.map(function (elem, index, arr) {
  return elem * index;
});
//[0, 2, 6]

var arr = [1, 2, 3];

function log(element, index, array) {
  console.log('[' + index + '] = ' + element);
}

arr.forEach(log);
// [0] = 1
// [1] = 2
// [2] = 3

var arr = [1, 2, 3, 4, 5];
arr.filter(function (elem) {
  return (elem > 3);
});
//[4, 5]

arr.reduce(function (x, y) {
  console.log(x, y)
  return x + y;
});
// 1 2
// 3 3
// 6

var arr = [1, 2];
arr.unshift(3, 4);  //4
arr;  // [3, 4, 1, 2]

var arr = ['a', 'b', 1, 2];
arr.shift(); //'a'
arr;  //['b', 1, 2]

var arr = [1, 2, 12, 100]

arr.sort(function (a, b) {
  return a - b;
});
// [1, 2, 12, 100]

var arr = ['Alibaba', 'Tencent', 'Baidu', 'XiaoMi', '360'];

// 从索引2开始删除3个元素
arr.splice(2, 3); // 返回删除的元素 ['Baidu', 'XiaoMi', '360']
arr; // ['Alibaba', 'Tencent']

arr.splice(2, 0, 'Toutiao', 'Meituan', 'Didi'); // 返回[],因为没有删除任何元素
arr; //["Alibaba", "Tencent", "Toutiao", "Meituan", "Didi"]

var arr = ["Alibaba", "Tencent", "Toutiao", "Meituan", "Didi"]
arr.splice(2, 2, 'Apple', 'Google');  //["Toutiao", "Meituan"]
arr; //["Alibaba", "Tencent", "Apple", "Google", "Didi"]
