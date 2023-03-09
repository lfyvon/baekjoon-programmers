const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const num = parseInt(input.shift());
const meeting = input.map(t => t.split(' ').map((el) => parseInt(el))).sort(function (a, b) {
    if(a[1] === b[1]) return a[0] - b[0]
    else return a[1] - b[1]
});

let count = 0;
let curEnd = 0;
for(let i = 0; i < num; i++){
    const start = meeting[i][0]; 
    const end = meeting[i][1];
    if(start >= curEnd) {
        curEnd = end;
        count++;
    }
}
console.log(count);
