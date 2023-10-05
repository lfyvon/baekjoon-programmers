const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const list = input.slice(1).map(el => el.trim().split(" ")).sort((a, b) => {
    return  new Date(b[3], b[2], b[1]) - new Date(a[3], a[2], a[1]);
});
console.log(list[0][0]);
console.log(list[n - 1][0]);