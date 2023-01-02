const [l, a, b, c, d] = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number);
let math = Math.ceil(a / c);
let kor = Math.ceil(b / d);
let max = math > kor ? l - math : l - kor;
console.log(max);