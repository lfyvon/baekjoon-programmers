const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
let i = 0;
let idx = 1;
let result = "";
while(i < N){
    const [n, s, d] = input[idx++].split(" ").map(Number);
    let sum = 0;
    for(let j = idx; j < idx + n; j++){
        const [a, b] = input[j].split(" ").map(Number);
        if(s * d >= a) sum += b;
    }
    result += `Data Set ${i + 1}:\n${sum}\n\n`;
    idx += n;
    i++;
}
console.log(result.trim());