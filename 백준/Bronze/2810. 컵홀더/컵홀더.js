const [N, seats] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const llCount = seats.split("LL").length - 1;
const sCount = seats.split("S").length - 1;
let result = 0;
if(llCount) result += llCount + 1 ;
result += sCount;
console.log(result);