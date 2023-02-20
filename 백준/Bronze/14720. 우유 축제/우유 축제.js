const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const shop = input[1].split(' ').map(Number);
let milk = 0;
let result = 0;
for(let i = 0; i < n; i++){
    if(shop[i] === milk % 3){
        result++;
        milk++;
    }
}
console.log(result);