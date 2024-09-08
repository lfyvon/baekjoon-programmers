const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let i = 0;
const result = [];
while(input[i] !== '0 0 0'){
    const [M, A, B] = input[i++].split(" ").map(Number);
    const diff = Math.round((M / A - M / B) * 3600);
    const h = Math.floor(diff / 3600);
    const m = Math.floor((diff % 3600) / 60).toString().padStart(2, 0);
    const s = (diff % 60).toString().padStart(2, 0);
    result.push(`${h}:${m}:${s}`);
}
console.log(result.join("\n"));