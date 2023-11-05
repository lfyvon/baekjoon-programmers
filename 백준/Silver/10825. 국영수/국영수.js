const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const list = input.slice(1).map(el => el.trim().split(" ")).sort((a, b) => {
    if(+a[1] !== +b[1]) return +b[1] - +a[1];
    if(+a[2] !== +b[2]) return +a[2] - +b[2];
    if(+a[3] !== +b[3]) return +b[3] - +a[3];
    return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0;
}).map(el => el[0]);
console.log(list.join("\n"));