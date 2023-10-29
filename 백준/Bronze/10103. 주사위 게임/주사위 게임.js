const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
let [p1, p2] = [100, 100];
for(let i = 1; i <= n; i++){
    const [d1, d2] = input[i].split(" ").map(Number);
    if(d1 > d2) p2 -= d1;
    if(d1 < d2) p1 -= d2;
}
console.log(p1);
console.log(p2);