const [n, k] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const queue = Array(n).fill().map((v, i) => i + 1);
let count = 0;
const result = [];

while(queue.length){
    count++;
    const num = queue.shift();
    count % k === 0 ? result.push(num) : queue.push(num);
}

console.log('<' + result.join(', ') + '>');