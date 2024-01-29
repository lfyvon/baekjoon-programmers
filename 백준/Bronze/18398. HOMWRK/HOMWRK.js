const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const T = Number(input[0]);
let i = 0;
let j = 1;
const result = [];
while(i < T){
    const N = Number(input[j++]);
    for(let k = j; k < j + N; k++){
        const [A, B] = input[k].split(" ").map(Number);
        result.push(`${A + B} ${A * B}`);
    }
    j += N;
    i++;
}
console.log(result.join("\n"));