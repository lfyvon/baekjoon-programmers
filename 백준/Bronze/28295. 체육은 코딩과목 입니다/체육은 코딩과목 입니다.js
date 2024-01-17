const result = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number).reduce((a, b) => a + b, 0) % 4;
const dir = {
     0 : "N",
     1 : "E",
     2 : "S",
     3 : "W"
}
console.log(dir[result]);