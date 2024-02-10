const [t1, t2] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(" : ").map((v, i) => v * 3600 / (60 ** i)).reduce((a, b) => a + b, 0));
let time = t2 - t1;
if(time < 0) time += 24 * 3600;
console.log(time);