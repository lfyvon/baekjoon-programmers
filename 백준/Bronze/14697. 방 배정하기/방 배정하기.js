const [A, B, C, N] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const AMax = Math.floor(N / A);
const BMax = Math.floor(N / B);
const CMax = Math.floor(N / C);
let result = 0;
for(let i = 0; i <= AMax; i++){
    for(let j = 0; j <= BMax; j++){
        for(let k = 0; k <= CMax; k++){
            if(A * i + B * j + C * k === N) result = 1;
        }
    }
}
console.log(result);