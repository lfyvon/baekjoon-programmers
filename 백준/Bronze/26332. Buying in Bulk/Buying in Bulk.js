const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const result = [];
for(let i = 1; i <= n; i++){
    const [c, p] = input[i].split(" ").map(Number);
    let price = c * p;
    if(price > 1) price -= (c - 1) * 2;
    result.push(c + " " + p);
    result.push(price);
}
console.log(result.join("\n"));