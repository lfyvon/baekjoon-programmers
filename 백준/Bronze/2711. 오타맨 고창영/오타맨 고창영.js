const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const T = Number(input[0]);
const result = [];
for(let i = 1; i <= T; i++){
    const [num, str] = input[i].trim().split(" ");
    result.push(str.slice(0, +num - 1) + str.slice(+num));
}
console.log(result.join("\n"));