let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let n = parseInt(input[0]);
let a = input[1].trim().split(' ').map(v => +v).sort(function (a, b) {
    return a - b;
});
let b = input[3].trim().split(' ').map(v => +v);
let result = [];
let map = new Map();
a.forEach(el => {
    if(map.has(el))map.set(el, map.get(el)+1);
    else map.set(el, 1);
})
b.forEach(el => {
    if(map.has(el))result.push(map.get(el))
    else result.push(0);
})
console.log(result.join(' '));