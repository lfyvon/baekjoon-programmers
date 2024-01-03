const N = Number(require('fs').readFileSync('/dev/stdin').toString());
let a = 5;
let b = 7;
for(let i = 1; i < N; i++){
    a += b;
    b += 3;
    a %= 45678;
}
console.log(a);