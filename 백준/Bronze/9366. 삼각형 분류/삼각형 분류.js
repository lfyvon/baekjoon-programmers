const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const result = [];
for(let i = 1; i <= n; i++){
    const [a, b, c] = input[i].split(" ").map(Number).sort((a, b) => a - b);
    let str = `Case #${i}: `;
    if(a === b && b === c && a === c) str += "equilateral";
    else if(a + b <= c) str += "invalid!";
    else if(a === b || b === c || a === c) str += "isosceles";
    else str += "scalene";
    result.push(str);
}
console.log(result.join("\n"));