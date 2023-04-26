let [a, b, c, d, e] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let result = 0;
if(a < 0){
    result += -a * c;
    a = 0;
}
if(a === 0) result += d;
result += (b - a) * e;
console.log(result);