const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('');
const mbti = "ESTJINFP";
let result = "";
for(let i = 0; i < 4; i++){
    result += mbti[(mbti.indexOf(input[i]) + 4) % 8];
}
console.log(result);