let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, k] = input[0].split(' ').map(el => parseInt(el));
const coins = input.slice(1).map(el => parseInt(el)).reverse();
let sum = 0;
let result = 0;
for(let i = 0; i < n; i++){
    if(k / coins[i] >= 1){
        result += Math.floor(k / coins[i]);
        k = k % coins[i];
    }
    if(k === 0){
        break;
    } 
}
console.log(result);