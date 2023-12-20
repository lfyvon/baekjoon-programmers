const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(" ").map(Number));
const [N, K] = input[0];
const arr = Array.from(Array(7), () => new Array(2).fill(0));
let result = 0;
for(let i = 1; i <= N; i++){
    const [S, Y] = input[i];
    arr[Y][S]++;
}
for(let i = 1; i <= 6; i++){
    result += Math.ceil(arr[i][0] / K) + Math.ceil(arr[i][1] / K);
}
console.log(result);