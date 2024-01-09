const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const result = [];
for(let i = 1; i <= N; i++){
    const [str1, str2] = input[i].trim().split(" ").map(el => el.split("").sort().join(""));
    result.push(str1 === str2 ? "Possible" : "Impossible");
}
console.log(result.join("\n"));