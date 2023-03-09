let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let len = parseInt(input[0]);
let str = input[1].split('');
let r = 1;
let result = 0;

for(let i = 0; i < len; i++){
    result += ((str[i].charCodeAt() - 96) * r) % 1234567891;
    r *= 31;
    r %= 1234567891;
    result %= 1234567891;
}

console.log(result);