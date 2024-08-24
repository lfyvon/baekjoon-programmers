const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const arr = input[1].split(" ").map(Number).sort((a, b) => a - b);
let result = new Set();
for(let i = 1; i * i <= arr[0]; i++){
    if(arr[0] % i === 0){
        result.add(i);
        result.add(arr[0] / i);
    }
}

for(let i = 0; i < N; i++){
    for(let x of result){
        if(arr[i] % x) result.delete(x);
    }
}

console.log([...result].sort((a, b) => a - b).join("\n"));