const [n, k] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const queue = Array(n).fill().map((v, i) => i + 1);
let count = 0;
const result = [];

while(queue.length){
    count = (count + k - 1) % queue.length;
    result.push(queue[count]);
    queue.splice(count, 1);
}

console.log('<' + result.join(', ') + '>');