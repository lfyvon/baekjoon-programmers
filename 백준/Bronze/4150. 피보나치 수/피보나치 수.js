const N = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
const f = [1n, 1n];
for(let i = 2; i < N; i++){
    f.push(f[i - 1] + f[i - 2]);
}
console.log(f[N - 1].toString());