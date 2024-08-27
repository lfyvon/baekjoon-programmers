const [N, A, B, C] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const fac = (n) => {
    let num = 1;
    for(let i = 2; i <= n; i++){
        num *= i;
    }
    return num;
}
console.log(fac(N) / (fac(A) * fac(B) * fac(C)));