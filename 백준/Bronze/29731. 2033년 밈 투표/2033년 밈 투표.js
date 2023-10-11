const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.trim());
const promise = ["Never gonna give you up",
    "Never gonna let you down",
    "Never gonna run around and desert you",
    "Never gonna make you cry",
    "Never gonna say goodbye",
    "Never gonna tell a lie and hurt you",
    "Never gonna stop"];
const n = Number(input[0]);
let result = "No";
for(let i = 1; i <= n; i++){
    if(!promise.includes(input[i])) result = "Yes";
}
console.log(result);