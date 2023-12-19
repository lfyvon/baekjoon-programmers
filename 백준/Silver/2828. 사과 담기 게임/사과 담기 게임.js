const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input.shift().split(" ").map(Number);
const [J, ...apples] = input.map(Number);
let left = 1;
let right = M;
let count = 0;
for(let i = 0; i < J; i++){
    if(right < apples[i]){
        count += apples[i] - right;
        right = apples[i];
        left = apples[i] - (M - 1);
    } else if(left > apples[i]){
        count += left - apples[i];
        left = apples[i];
        right = apples[i] + (M - 1);
    }
}
console.log(count);