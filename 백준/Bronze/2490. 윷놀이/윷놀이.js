const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(el => el.split(' ').map(Number));
const yut = ["D", "C", "B", "A", "E"];
let result = [];
for(let i = 0; i < 3; i++){
    let sum = input[i].reduce((a, b) => a + b, 0);
    result.push(yut[sum]);
}
console.log(result.join("\n"));