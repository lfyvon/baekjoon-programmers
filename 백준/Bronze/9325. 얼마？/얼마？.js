const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const T = Number(input[0]);
let i = j = 0;
const result = [];
while(i < T){
    const s = Number(input[++j]);
    const n = Number(input[++j]);
    let sum = s;
    for(let x = j + 1; x <= j + n; x++){
        const [q, p] = input[x].split(" ").map(Number);
        sum += q * p;
    }
    result.push(sum);
    j += n;
    i++;
}
console.log(result.join("\n"));