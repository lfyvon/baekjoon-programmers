const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(el => el.split(' ').map(Number));
const [m, n, k] = input[0];
const map = Array.from(new Array(m), () => Array(n).fill(1));
const visited = Array.from(new Array(m), () => Array(n).fill(0));
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];
let count = 0;
const area = [];
for(let i = 1; i <= k; i++){
    const [x1, y1, x2, y2] = input[i];
    for(let a = y1; a < y2; a++){
        for(let b = x1; b < x2; b++){
            map[a][b] = 0;
        }
    }
}

const bfs = (startX, startY) => {
    const queue = [];
    queue.push([startX, startY]);
    visited[startX][startY] = 1;
    let count = 1;
    while(queue.length){
        const [x, y] = queue.shift();
        for(let i = 0; i < 4; i++){
            const posX = x + dx[i];
            const posY = y + dy[i];
            if(posX < 0 || posX >= m || posY < 0 || posY >= n) continue;
            if(map[posX][posY] && !visited[posX][posY]){
                visited[posX][posY] = visited[x][y] + 1;
                queue.push([posX, posY]);
                count++;
            }
        }
    }
    return count;
}

for(let i = 0; i < m; i++){
    for(let j = 0; j < n; j++){
        if(map[i][j] && !visited[i][j]){
            count++;
            area.push(bfs(i, j));
        }
    }
}

console.log(count);
if(count) console.log(area.sort((a, b) => a - b).join(" "));
