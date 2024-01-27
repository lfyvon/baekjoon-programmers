const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input.shift().split(" ").map(Number);
let r = N;
let l = M;
for(let i = 0; i < N; i++){
    if(input[i].includes("X")) r--;
}

for(let i = 0; i < M; i++){
    for(let j = 0; j < N; j++){
        if(input[j][i] === "X"){
            l--;
            break;
        }
    }
}

console.log(Math.max(r, l));