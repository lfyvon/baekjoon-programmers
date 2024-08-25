const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(" ").map(Number));
const [N, M] = input[0];
const [s, r] = [Math.ceil((N + 1)/ 6), N % 6];
let [min1, min2] = input[1];
for(let i = 2; i <= M; i++){
    const [p, e] = input[i];
    min1 = Math.min(min1, p);
    min2 = Math.min(min2, e);
}
console.log(Math.min(s * min1, (s - 1) * min1 + min2 * r, N * min2));