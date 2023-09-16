const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const pepper = {
    Poblano	: 1500,
    Mirasol	: 6000,
    Serrano : 15500,
    Cayenne : 40000,
    Thai : 75000,
    Habanero : 125000
}
let result = 0;
const n = Number(input[0]);
for(let i = 1; i <= n; i++){
    result += pepper[input[i].trim()];
}
console.log(result);