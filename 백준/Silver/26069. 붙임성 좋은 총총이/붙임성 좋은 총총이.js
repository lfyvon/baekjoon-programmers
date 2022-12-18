const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const n = parseInt(input[0]);
const metList = input.slice(1).map(el => el.split(' ').map(el => el.trim()));
let nameList = new Set();
nameList.add("ChongChong");
for(let i = 0; i < n; i++){
    if(nameList.has(metList[i][0]) || nameList.has(metList[i][1])){
        nameList.add(metList[i][0]).add(metList[i][1]);
    }
}
console.log(nameList.size);