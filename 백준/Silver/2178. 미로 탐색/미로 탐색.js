const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const dx = [-1, 1, 0, 0];
const dy = [0, 0 , -1, 1];
const [n, m] = input[0].split(' ').map(el => parseInt(el));
const maze = input.slice(1).map(v => v.trim().split('').map(el => parseInt(el)));
let visited = Array.from(new Array(n), () => Array(m).fill(0));

function BFS(startX, startY){
    let queue = [];
    queue.push([startX, startY]);
    visited[startX][startY] = 1;

    while(queue.length){
        const [x, y] = queue.shift();
        for(let i = 0; i < 4; i++){
            let posX = x + dx[i];
            let posY = y + dy[i];

            if(posX < 0 || posY < 0 || posX >= n || posY >= m || visited[posX][posY] > 0 || maze[posX][posY] !== 1) continue;
            queue.push([posX, posY]);
            visited[posX][posY] = visited[x][y] + 1; 
        }
    }
    return visited[n - 1][m - 1];
}

console.log(BFS(0, 0));