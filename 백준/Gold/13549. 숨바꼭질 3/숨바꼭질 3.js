const [N, K] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const visited = new Array(100001).fill(0);
const time = new Array(100001).fill(0);
const bfs = (n) => {
    const queue = [n];
    visited[n] = 1;
    while(queue.length){
        x = queue.shift();
        if(x === K) return time[K];
        for(let posX of [x - 1, x + 1, x * 2]){
            if(visited[posX]) continue;
            if(posX < 0 || posX > 100000) continue;
            visited[posX] = 1;
            if(posX === x * 2){
                time[posX] = time[x];
                queue.unshift(posX);
            } else{
                time[posX] = time[x] + 1;
                queue.push(posX);
            }
        }
    }
}
console.log(bfs(N));