const [x, y] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);
const week = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
let date = new Date(`2017-${x}-${y}`);
let result = week[date.getDay()];
console.log(result);