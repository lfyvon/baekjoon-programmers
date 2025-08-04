const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const [A, D] = input[1].split(" ").map(Number);
const [Sr, Sc] = input[2].split(" ").map(Number);
let result = 'NO...';

if(D === 0){
    if(Sc > A && Sr === 1){
        result = 'YES!';
    }

    if(N % 2 === 1 && Sr === N){
        result = 'YES!';
    }
} else {
    if(Sc < A && Sr === 1){
        result = 'YES!';
    }

    if(N % 2 === 0 && Sr === N){
        result = 'YES!';
    }
}

console.log(result);