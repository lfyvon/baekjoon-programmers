const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const n = Number(input[0]);
const a = input[1].split(' ').map(Number);
const op = input[2].split(' ').map(Number);
let max = -1000000000;
let min = 1000000000;

const calculate = (a, b, op) => {
    if(op === 0) return a + b;
    if(op === 1) return a - b;
    if(op === 2) return a * b;
    if(op === 3) return a < 0 ? -Math.floor(-a / b) : Math.floor(a / b);
}

const dfs = (count, result) => {
    if(count === n - 1){
        max = Math.max(max, result);
        min = Math.min(min, result);
    } else{
        for(let i = 0; i < 4; i++){
            if(op[i]){
                op[i]--;
                dfs(count + 1, calculate(result, a[count + 1], i));
                op[i]++;
            }
        }
    }
}

dfs(0, a[0]);
console.log(max ? max : 0);
console.log(min ? min : 0);