const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const cur = input[0].split(":").map(Number);
const rest = input[1].split(":").map(Number);
let diff = 0;
for(let i = 0; i < 3; i++){
    diff += rest[i] * (60 ** (2 - i)) - cur[i] * (60 ** (2 - i));
}
if(diff < 0) diff += 24 * 3600;
console.log(`${Math.floor(diff / 3600).toString().padStart(2, '0')}:${Math.floor(diff % 3600 / 60).toString().padStart(2, '0')}:${(diff % 60).toString().padStart(2, '0')}`);