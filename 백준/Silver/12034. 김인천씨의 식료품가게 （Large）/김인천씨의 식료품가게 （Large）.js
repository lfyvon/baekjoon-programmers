const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const T = Number(input[0]);
let idx = 1;
let count = 0;
const result = [];

while(count < T){
    const N = input[idx++];
    const P = input[idx++].split(" ").map(Number);
    const arr = [];
    for(let i = 0; i < N * 2; i++){
        if(!P[i]) continue;
        for(let j = i + 1; j < N * 2; j++){
            if(P[i] === P[j] * 0.75){
                arr.push(P[i]);
                P[i] = 0;
                P[j] = 0;
                break;
            }
        }
    }
    result.push(`Case #${count + 1}: ${arr.join(" ")}`);
    count++;
}
console.log(result.join("\n"));