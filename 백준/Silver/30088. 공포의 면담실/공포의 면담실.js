const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const dep = input.slice(1).map(el => el.split(" ").map(Number)).sort((a, b) => {
    if(a[0] === b[0]){
        return (a[1] + a[2]) - (b[1] + b[2]);
    }
});

let sum = 0;
let result = 0;
for(let i = 0; i < N; i++){
    sum += dep[i].slice(1).reduce((a, b) => a + b, 0);
    result += sum;
}

console.log(result);