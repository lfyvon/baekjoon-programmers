const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const shape = input.slice(1, N + 1).map(el => el.trim());
const K = Number(input[N + 1]);
const result = [];
for(let i = 0; i < N; i++){
    if(K === 1) result.push(shape[i]);
    else if(K === 2){
        result.push(shape[i].split("").reverse().join(""));
    } else{
        result.push(shape[N - i - 1]);
    }
}
console.log(result.join("\n"));