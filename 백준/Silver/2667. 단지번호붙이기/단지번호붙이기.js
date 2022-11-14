const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const dx = [-1, 1, 0, 0];
const dy = [0, 0 , -1, 1];
const n = parseInt(input[0]);
const complex = input.slice(1).map(el => el.trim().split('').map(v => parseInt(v)));
let visited = Array.from(new Array(n), () => Array(n).fill(0));
let result = [];

function BFS(startX, startY){
    const queue = [];
    queue.push([startX, startY]);
    visited[startX][startY] = 1;
    let count = 1;
    while(queue.length){
        const [x, y] = queue.shift();
        for(let i = 0; i < 4; i++){
            let posX = x + dx[i];
            let posY = y + dy[i];

            if(posX < 0 || posY < 0|| posX >= n || posY >= n) continue;
            if(visited[posX][posY] > 0 || complex[posX][posY] !== 1) continue;
            queue.push([posX, posY]);
            visited[posX][posY] = visited[x][y] + 1;
            count++;
        }
    }
    return count;
}

for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
        if(complex[i][j] === 1 && visited[i][j] === 0){
            result.push(BFS(i, j));
        }
    }
}
result.sort((a, b) => a - b);
console.log(result.length);
console.log(result.join('\n'));