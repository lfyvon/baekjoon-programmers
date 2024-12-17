const [h, l, a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let result = "NO";
if((h >= a / 2 && l >= b) || (h >= b / 2 && l >= a)){
    result = "YES";
}
console.log(result);