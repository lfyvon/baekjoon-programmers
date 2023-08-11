const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(" ").map(Number);
const map = input.slice(1).map(el => el.split(" ").map(Number));
const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];
const visited = Array.from(new Array(n), () => Array(m).fill(-1));
let [tx, ty] = [0, 0];
for(let i = 0; i < n; i++){
    for(let j = 0; j < m; j++){
        if(map[i][j] === 2) [tx, ty] = [i, j];
        if(map[i][j] === 0) visited[i][j] = 0;
    }
}

const bfs = (startX, startY) => {
    const queue = [];
    queue.push([startX, startY]);
    visited[startX][startY] = 0;
    // let idx = 0;
    while(queue.length){
        const [x, y] = queue.shift();
        for(let i = 0; i < 4; i++){
            const posX = x + dx[i];
            const posY = y + dy[i];
            if(posX < 0 || posX >= n || posY < 0 || posY >= m || (tx === posX && ty === posY)) continue;
            if(map[posX][posY] && visited[posX][posY] < 0){
                visited[posX][posY] = visited[x][y] + 1;
                queue.push([posX, posY]);
            }
        }
    }
}

bfs(tx, ty);
console.log(visited.map(el => el.join(" ")).join("\n"));