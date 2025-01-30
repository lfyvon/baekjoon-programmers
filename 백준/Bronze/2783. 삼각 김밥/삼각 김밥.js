const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [X, Y] = input[0].split(" ").map(Number);
let min = X / Y;
const N = Number(input[1]);
const result = [];
for(let i = 2; i < N + 2; i++){
    const [xi, yi] = input[i].split(" ").map(Number);
    const minI = xi / yi;
    if(minI < min){
        min = minI;
    }
}
console.log((min * 1000).toFixed(2));