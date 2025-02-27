const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const result = [];

for(let i = 1; i <= N; i++){
    const [k, ...arr] = input[i].split(" ").map(Number);
    let sum = 0;
    for(let j = 0; j < k; j++){
        if(arr[j] % 2 === 0) sum += arr[j];
        else sum -= arr[j];
    }
    result.push(sum > 0 ? "EVEN" : sum < 0 ? "ODD" : "TIE");
}
console.log(result.join("\n"));