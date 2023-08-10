const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(" ").map(Number);
const campus = input.slice(1).map(el => el.trim().split(""));
const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];
const visited = Array.from(new Array(n), () => Array(m).fill(0));
let [ix, iy] = [0, 0];
let count = 0;

for(let i = 0; i < n; i++){
    for(let j = 0; j < m; j++){
        if(campus[i][j] === "I") [ix, iy] = [i, j];
    }
}

const bfs = (startX, startY) => {
    const queue = [];
    queue.push([startX, startY]);
    visited[startX][startY] = 1;

    while(queue.length){
        const [x, y] = queue.shift();
        for(let i = 0; i < 4; i++){
            let posX = x + dx[i];
            let posY = y + dy[i];

            if(posX < 0 || posX >= n || posY < 0 || posY >= m || campus[posX][posY] === "X" || visited[posX][posY]) continue;
            if(campus[posX][posY] === "P") count++;
            visited[posX][posY] = 1;
            queue.push([posX, posY]);
        }
    }
}
bfs(ix, iy);
console.log(!count ? "TT" : count);