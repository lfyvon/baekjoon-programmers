const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [a, b] = input[0].split(' ').map(Number);
const [c, d] = input[1].split(' ').map(Number);
let arr = [ a / c + b / d, 
            c / d + a / b, 
            d / b + c / a, 
            b / a + d / c];

console.log(arr.indexOf(Math.max(...arr)));