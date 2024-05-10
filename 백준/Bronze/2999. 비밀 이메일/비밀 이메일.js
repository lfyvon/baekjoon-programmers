const str = require('fs').readFileSync('/dev/stdin').toString().trim();
let N = str.length;
let arr = [];
for(let i = 1; i <= Math.sqrt(N); i++){
    if(N % i === 0) {
        arr.push(i)
        if (N / i !== i) arr.push(N / i)
    }
}
arr.sort((a, b) => a - b);
const count = arr.length;
const R1 = arr[Math.floor((count - 1) / 2)];
const R2 = arr[Math.ceil((count - 1) / 2)];
let result = "";

for(let i = 0; i < R1; i++){
    for(let j = 0; j < R2; j++){
        result += str[i + j * R1];
    }
}

console.log(result);