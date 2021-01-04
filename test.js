// 概念讨论题：
// 1. What is website accessibility and how to improve the accessibility of a website?
//     (网站易访问性的概念以及如何提升网站可访问性)
//     2. Have you ever used any CSS preprocessors? Give the pros and cons of using CSS preprocessor.
// (谈谈CSS预处理器使用上的经验，比如SASS、LESS之类。分析一下CSS预处理器的优缺点)
// 3. Tell me about event bubbling. How could you use it?
//     (JavaScript事件冒泡的理解和应用)
//
//     Coding题：
// 1. 预测以下代码的输出结果：
var Foo = function (a) {
  function bar() {
    console.log(a);
  }

  this.baz = function () {
    console.log(a);
  };
};

Foo.prototype = {
  biz: function () {
    console.log(a);
  }
};

var f = new Foo(7);
//预测输出结果：
// f.bar(); // result: TypeError, f.bar is not a function.
f.baz(); // result: 7
// f.biz(); // result: ReferenceError, a is not defined

// 2.  给了一张网页截图，要求用HTML/CSS实现其中的布局
//
// 3.  已知endorsement array, 要求写一个function实现想要输出的结果：
// function input
let endorsements = [
  {skill: 'javascript', user: 'Chad'},
  {skill: 'javascript', user: 'Bill'},
  {skill: 'javascript', user: 'Sue'},
  {skill: 'html', user: 'Sue'},
  {skill: 'css', user: 'Sue'},
  {skill: 'css', user: 'Bill'}
];
// function output
// [
//   { skill: 'javascript', user: [ 'Chad', 'Bill', 'Sue' ], count: 3 },
//   { skill: 'css', user: [ 'Sue', 'Bill' ], count: 2 },
//   { skill: 'html', user: [ 'Sue' ], count: 1 }
// ];

let shit = arr => {
  let res = []
  let js = {
    skill: 'javascript',
    user: [],
    count: 0
  }, css = {
    skill: 'css',
    user: [],
    count: 0
  }, html = {
    skill: 'html',
    user: [],
    count: 0
  }
  arr.forEach(ele => {
    if (ele.skill === 'javascript') {
      js.user[js.count] = ele.user
      js.count++
    }
    if (ele.skill === 'css') {
      css.user[css.count] = ele.user
      css.count++
    }
    if (ele.skill === 'html') {
      html.user[html.count] = ele.user
      html.count++
    }
  })
  res.push(js)
  res.push(css)
  res.push(html)
  return res
}

console.log(shit(endorsements))
