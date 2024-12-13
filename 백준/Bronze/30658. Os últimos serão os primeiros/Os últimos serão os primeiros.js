const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let i = 0;
let result = "";
while(input[i]){
    const N = input[i++];

    const arr = input.slice(i, i + N);
    result += arr.reverse().join("\n") + "\n0\n";
    i += N;
}
console.log(result.trim());