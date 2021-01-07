// 基本包装类型
let str = 'andy'
console.log(str.length);
console.log(str.charAt(3));

// 字符串不可变 重新开辟内存 asdasd str2再指向它 aaa的内存空间没删
// 别总给字符串重新赋值 很占内存
let str2 = 'aaa'
str2 = 'asdasdasd'

// 从index2开始找's'
console.log(str2.indexOf('s', 2));

// concat()

// substr()
console.log(str2.substr(2, 2));

console.log(str2.replace('a', 'z'));

