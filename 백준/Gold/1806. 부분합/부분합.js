const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, S] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
let minLen = Infinity;
let j = 0;
let result = 0;
for(let i = 0; i < N; i++){
    if(result + arr[i] < S){
        result += arr[i];
    } else {
        minLen = Math.min(minLen, i - j + 1);
        result -= arr[j++];
        i--;
    }
}
console.log(minLen === Infinity ? 0 : minLen);