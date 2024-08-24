const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);
let result = [1];
let min = Math.min(...arr);
for(let i = 2; i <= min; i++){
    let check = true;
    for(let j = 0; j < N; j++){
        if(arr[j] % i) check = false;
    }
    if(check) result.push(i);
}
console.log(result.join("\n"));