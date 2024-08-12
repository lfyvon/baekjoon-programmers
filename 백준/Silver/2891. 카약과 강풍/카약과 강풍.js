const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(" ").map(Number));
const [N, S, R] = input[0];
const arrS = input[1];
const arrR = input[2];
const count = new Array(N + 1).fill(0);
for(let i = 0; i < S; i++){
    count[arrS[i]]--;
}
for(let i = 0; i < R; i++){
    count[arrR[i]]++;
}
for(let i = 1; i <= N; i++){
    if(count[i - 1] + count[i] === 0){
        count[i - 1] = 0;
        count[i] = 0;
    }
}

console.log(count.filter(el => el < 0).length);