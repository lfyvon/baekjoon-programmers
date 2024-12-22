const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const result = [];
let i = 0;
while(input[i] !== "0"){
    const N = Number(input[i++]);
    const arr = input[i++].split(" ").map(Number);
    let sum = 0;
    let max = 0;
    for(let j = 0; j < N; j++){
        if(j > 2){
            sum -= arr[j - 3];
        }
        sum += arr[j];
        if(max < sum) max = sum;
    }
    result.push(max);
}
console.log(result.join("\n"));