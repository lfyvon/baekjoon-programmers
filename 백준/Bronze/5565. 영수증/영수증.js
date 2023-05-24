const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let price = input[0];
for(let i = 1; i < 10; i++){
    price -= input[i];
}
console.log(price);