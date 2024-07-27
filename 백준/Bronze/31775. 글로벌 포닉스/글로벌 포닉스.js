const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.trim());
let str = 'klp';
let result = [];
for(let i = 0; i < 3; i++){
    result.push(input[i][0]);
}
result = result.sort().join("");
console.log(result === str ? "GLOBAL" : "PONIX");