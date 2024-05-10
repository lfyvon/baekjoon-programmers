const str = require('fs').readFileSync('/dev/stdin').toString().trim();
let N = str.length;
let R = 1;
for(let i = 2; i <= Math.sqrt(N); i++){
    if(N % i === 0) {
        R = i;
    }
}
const C = N / R;
let result = "";

for(let i = 0; i < R; i++){
    for(let j = 0; j < C; j++){
        result += str[i + j * R];
    }
}

console.log(result);