const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const T = input[0];
const sub = [...input[1].split(" ").map(Number), ...new Array(5 - T).fill(0)];
let result = 0;
result += sub[0] > sub[2] ? (sub[0] - sub[2]) * 508 : (sub[2] - sub[0]) * 108;
result += sub[1] > sub[3] ? (sub[1] - sub[3]) * 212 : (sub[3] - sub[1]) * 305;
if(T > 4) result += sub[4] * 707;
result *= 4763;
console.log(result);