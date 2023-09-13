const n = Number(require('fs').readFileSync('/dev/stdin').toString());
const sum = n * (n + 1) / 2;
const square = sum * sum;
let cube = 0;
for(let i = 1; i <= n; i++){
    cube += i * i * i;
}
console.log(sum);
console.log(square);
console.log(cube);