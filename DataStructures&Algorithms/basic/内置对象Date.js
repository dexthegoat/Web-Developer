let date = new Date()
console.log(date.getFullYear());
console.log(date.getUTCDate());

let date1 = new Date(2020, 10, 1)
console.log(date1);

let date2 = new Date('2021-01-07 8:8:8')
console.log(date2);

function countDown(time) {
  let now = +new Date()
  let inputTime = +new Date(time)
  let times = (inputTime - now) / 1000
  let d = parseInt(times / 60 / 60 / 24)
  let h = parseInt(times / 60 / 60 % 24)
  let m = parseInt(times / 60 % 60)
  let s = parseInt(times % 60)
  return d + '天' + h + '时' + m + '分' + s + '秒'
}

console.log(countDown('2022-5-1 18:00:00'));
