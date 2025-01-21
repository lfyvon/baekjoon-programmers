const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const T = Number(input[0]);
let yCount = kCount = 0;
const result = [];
for(let i = 1; i <= 9 * T; i++){
    const [Y, K] = input[i].split(" ").map(Number);
    yCount += Y;
    kCount += K;
    if(i % 9 === 0){
        result.push(yCount > kCount ? "Yonsei" : yCount < kCount ? "Korea" : "Draw");
        yCount = 0;
        kCount = 0;
    }
}
console.log(result.join("\n"));