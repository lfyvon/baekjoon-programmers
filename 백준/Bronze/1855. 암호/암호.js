const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const K = Number(input[0]);
const str = input[1].trim().split("");
const arr =  Array.from(new Array(str.length / K), () => new Array(K).fill(0));
let result = "";
for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < K; j++){
        if(i % 2 === 0) arr[i][j] = str[K * i + j];
        else arr[i][K - 1 - j] = str[K * i + j];
    }
}
for(let j = 0; j < K; j++){
    for(let i = 0; i < arr.length; i++){
        result += arr[i][j];
    }
}

console.log(result);