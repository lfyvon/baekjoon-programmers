const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.trim());
const T = Number(input[0]);
const result = [];
for(let i = 1; i <= T; i++){
    const [A, B] = input[i].split(" ").map(el => el.toLowerCase().split("").sort((a, b) => a > b ? 1 : -1).join(""));
    result.push(`${input[i].split(" ").join(" & ")} are ${A === B ? "anagrams." : "NOT anagrams."}`);
}
console.log(result.join("\n"));