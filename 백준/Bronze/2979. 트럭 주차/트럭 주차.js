const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(" ").map(Number));
const [A, B, C] = input[0];
const count = new Array(101).fill(0);
let result = 0;
for(let i = 0; i < 4; i++){
    const [s, e] = input[i];
    for(let j = s; j < e; j++){
        count[j]++;
    }
}

for(let i = 0; i < 101; i++){
    if(count[i] === 1) result += A;
    if(count[i] === 2) result += B * 2;
    if(count[i] === 3) result += C * 3;
}

console.log(result);