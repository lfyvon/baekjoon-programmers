const [A, B, M] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let result = A % B;
for(let i = 0; i < M - 1; i++){
    result *= 10;
    result %= B;
}
result *= 10;
console.log(Math.floor(result / B));