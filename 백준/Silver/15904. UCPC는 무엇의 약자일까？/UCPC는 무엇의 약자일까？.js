const input = require('fs').readFileSync('/dev/stdin').toString().trim().replace(/[^UCPC]/g, "");
const UCPC = "UCPC";
let count = 0;
for(let i = 0; i < input.length; i++){
    if(UCPC[count] === input[i]) count++;
}
console.log(`I ${count === 4 ? "love" : "hate"} UCPC`);