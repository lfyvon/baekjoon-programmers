let [n, k] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);
let visited = Array(100001).fill(0);
let count = Array(100001).fill(0);
count[n] = 1;
const queue = [n];
while(queue.length){
    if(n === k) break;
    const x = queue.shift();
    const dx = [x- 1, x + 1, x * 2];
    for(let xPos of dx){
        if(xPos < 0 || xPos >= 100001) continue;
        if(visited[xPos] == 0){
            queue.push(xPos);
            visited[xPos] = visited[x] + 1;
            count[xPos] += count[x];
        } else if(visited[xPos] === visited[x] + 1){
            count[xPos] += count[x];
        }
    }
}

console.log(visited[k]);
console.log(count[k]);