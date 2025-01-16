const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(" ").map(Number);
let result = "Yes";
for(let i = 1; i <= n; i++){
    if(input[i].split("A").length - 1 !== 1) result = "No";
}
console.log(result);