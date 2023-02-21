const [s1, s2, s3] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const arr = new Array(81).fill(0);

for(let i = 1; i <= s1; i++){
    for(let j = 1; j <= s2; j++){
        for(let k = 1; k <= s3; k++){
            arr[i + j + k] += 1;
        }
    }
}

console.log(arr.indexOf(Math.max(...arr)));