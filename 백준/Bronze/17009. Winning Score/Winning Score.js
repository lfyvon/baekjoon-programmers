const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const apple = input[0] * 3 + input[1] * 2 + input[2];
const banana = input[3] * 3 + input[4] * 2 + input[5];
console.log(apple > banana ? "A" : apple < banana ? "B" : "T");