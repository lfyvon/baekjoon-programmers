let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const num = parseInt(input[0]);
const coor = input[1].split(' ').map(el => parseInt(el));
const set = Array.from(new Set([...coor])).sort((a, b) => a - b);
const map = new Map();
let result = [];

set.forEach((el, index) => {
    map.set(el, index);
})

for(let i = 0; i < num; i++){
    result.push(map.get(coor[i]));
}

console.log(result.join(' '));