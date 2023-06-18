const n = require('fs').readFileSync('/dev/stdin').toString().trim().split("").map(Number);
const numbers = new Array(10).fill(0);
for(let i = 0; i < n.length; i++){
    numbers[n[i]]++;
}
numbers[6] += numbers.pop();
numbers[6] = Math.ceil(numbers[6] / 2);
console.log(Math.max(...numbers));