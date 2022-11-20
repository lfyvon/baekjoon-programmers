const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(v => parseInt(v)));

const xList = [];
const yList = [];
for(let i = 0; i < 3; i++){
    xList.push(input[i][0]);
    yList.push(input[i][1]);
}

xList.sort((a, b) => a - b);
yList.sort((a, b) => a - b);

let x = xList[0];
let y = yList[0];
if(x === xList[1]) x = xList[2];
if(y === yList[1]) y = yList[2];

console.log(x + ' ' + y);