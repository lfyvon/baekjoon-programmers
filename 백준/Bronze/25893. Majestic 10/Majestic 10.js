const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const result = [];
for(let i = 1; i <= n; i++){
    result.push(input[i]);
    const [a, b, c] = input[i].split(" ").map(Number).sort((a, b) => a - b);
    if(a >= 10) result.push("triple-double\n");
    else if(b >= 10) result.push("double-double\n");
    else if(c >= 10) result.push("double\n");
    else result.push("zilch\n");
}
console.log(result.join("\n").trim());