console.log(Math.PI);
console.log(Math.max(1, 99, -10)); // 有非数字返回NaN
console.log(Math.max()); // -Infinity
Math.floor()
Math.ceil()
Math.abs()
Math.round() // 四舍五入
console.log(Math.random());

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
