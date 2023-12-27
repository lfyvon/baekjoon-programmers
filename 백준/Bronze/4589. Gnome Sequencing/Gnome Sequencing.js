const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const result = ["Gnomes:"];
for(let i = 1; i <= N; i++){
    const [a, b, c] = input[i].split(" ").map(Number);
    if((a < b && b < c) || (a > b && b > c)) result.push("Ordered");
    else result.push("Unordered");
}
console.log(result.join("\n"));