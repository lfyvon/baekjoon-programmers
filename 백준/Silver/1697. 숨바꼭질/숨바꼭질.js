let [n, k] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(el => parseInt(el));

let visited = Array(100001).fill(0);
const queue = [n];
while(queue.length){
    const x = queue.shift();
    if(x === k) break;
    const dx = [x- 1, x + 1, x * 2]
    for(let xPos of dx){
        if(xPos < 0 || xPos >= 100001) continue;
        if(visited[xPos] == 0){
            queue.push(xPos);
            visited[xPos] = visited[x] + 1;
        }
    }
}

console.log(visited[k]);