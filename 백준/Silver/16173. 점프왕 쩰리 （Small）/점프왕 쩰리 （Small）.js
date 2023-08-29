const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const map = input.slice(1).map(el => el.split(" ").map(Number));
const visited = Array.from(Array(n), () => Array(n).fill(0));
const dfs = (x, y) => {
    let queue = [];
    queue.push([x, y]);
    visited[x][y] = 1;
    while(queue.length){
        const [x, y] = queue.pop();
        const dist = map[x][y];
        if(dist === -1) return true; 
        if(x + dist < n && !visited[x + dist][y]){
            visited[x + dist][y] = 1;
            queue.push([x + dist, y]);
        }
        if(y + dist < n && !visited[x][y + dist]){
            visited[x][y + dist] = 1;
            queue.push([x, y + dist]);
        }
    }
    return false;
}
console.log(dfs(0, 0) ? "HaruHaru" : "Hing");