const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const dis = input[1].split(" ").map(Number);
const price = input[2].split(" ").map(Number);
let idx = 0;
let result = 0;
for(let i = 0; i < N - 1; i++){
    result += price[idx] * dis[i];
    if(price[idx] > price[i + 1]){
        idx++;
    }
}
console.log(result)