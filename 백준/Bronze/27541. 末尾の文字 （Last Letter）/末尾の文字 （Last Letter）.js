let [N, S] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.trim());
N = Number(N);
console.log(S[N - 1] === "G" ? S.slice(0, N - 1) : S + "G");