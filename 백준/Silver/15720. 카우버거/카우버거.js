const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(" ").map(Number));
const [b, c, d] = input[0];
const min = Math.min(b, c, d);
const max = Math.max(b, c, d);
const burgers = input[1].sort((a, b) => b - a);
const sides = input[2].sort((a, b) => b - a);
const drinks = input[3].sort((a, b) => b - a);
let discount = 0;
let result = 0;

for(let i = 0; i < min; i++){
    result += burgers[i] + sides[i] + drinks[i];
}

discount = result * 0.9;
for(let i = min; i < max; i++){
    let sum = 0;
    if(i < b) sum += burgers[i];
    if(i < c) sum += sides[i];
    if(i < d) sum += drinks[i];
    discount += sum;
    result += sum;
}

console.log(result);
console.log(discount);