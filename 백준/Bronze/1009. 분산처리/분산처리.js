const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const t = Number(input[0]);
const result = [];
for(let i = 1; i <= t; i++){
    const [a, b] = input[i].split(" ").map(Number);
    let pow = 1;
    
    for(let j = 0; j < b; j++){
        pow = (pow * a) % 10;
    }
    result.push(pow === 0 ? 10 : pow);
}
console.log(result.join("\n"));