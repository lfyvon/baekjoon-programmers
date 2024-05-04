const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const L = Number(input[0]);
const N = Number(input[1]);
const roll = new Array(L + 1).fill(1);
const ex = [1, 0];
const re = [1, 0]
for(let i = 2; i <= N + 1; i++){
    const [P, K] = input[i].split(" ").map(Number);
    const diff = K - P + 1;
    if(ex[1] < diff){
        ex[0] = i - 1;
        ex[1] = diff;
    }
    let count = 0;
    for(let j = P; j <= K; j++){
        if(roll[j]){
            roll[j] = 0;
            count++;
        }
    }
    if(count > re[1]){
        re[0] = i - 1;
        re[1] = count;
    }
}
console.log(ex[0] + '\n' +re[0]);