const N = Number(require('fs').readFileSync('/dev/stdin').toString());
let count = 0;
for(let i = 1; i < 100; i++){
    for(let j = 1; j < 100; j++){
        if(N - i - j === 0) count++;
    }
}
console.log(count);