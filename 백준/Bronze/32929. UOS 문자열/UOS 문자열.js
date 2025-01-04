const x = Number(require('fs').readFileSync('/dev/stdin').toString().trim()) - 1;
let str = "UOS"
console.log(str[x % 3]);