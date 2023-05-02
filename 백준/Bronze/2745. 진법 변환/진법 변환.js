const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const n = input[0].split('').reverse();
const b = Number(input[1]);
let result = 0;
for(let i = 0; i < n.length; i++){
    if(n[i] >= 'A' && n[i] <= 'Z'){
        result += (n[i].charCodeAt() - 55) * b ** i;
    } else{
        result += Number(n[i]) * b ** i;
    }
}
console.log(result);