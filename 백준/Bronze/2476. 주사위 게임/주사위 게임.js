const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
let result = [];
for(let i = 1; i <= n; i++){
    const [a, b, c] = input[i].split(" ").map(Number);;
    let prize = 0;
    if(a === b && b === c) prize = 10000 + a * 1000;
    else if(a === b || b === c) prize = b * 100 + 1000;
    else if(a === c) prize = c * 100 + 1000;
    else prize = Math.max(a, b, c) * 100
    result.push(prize);
}
console.log(Math.max(...result));