const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
let a = b = -1;
let result = "yes";
for(let i = 1; i <= N; i++){
    const [c, d] = input[i].split(" ").map(Number);
    if(a > c || b > d){
        result = "no";
        break;
    }
    a = c;
    b = d;
}
console.log(result);