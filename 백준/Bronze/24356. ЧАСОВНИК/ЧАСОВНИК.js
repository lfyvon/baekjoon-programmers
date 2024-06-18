const [t1, t2, m1, m2] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const time1 = t1 * 60 + t2;
const time2 = m1 * 60 + m2;
let total = time2 - time1 ;
if(total < 0) total += 24 * 60;
console.log(total, Math.floor(total / 30));