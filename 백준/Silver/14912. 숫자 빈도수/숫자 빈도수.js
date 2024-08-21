const [n, d] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let result = 0;
for(let i = 1; i <= n; i++){
    let num = i.toString().split("").filter(el => +el === d).length;
    result += num;
}
console.log(result);
