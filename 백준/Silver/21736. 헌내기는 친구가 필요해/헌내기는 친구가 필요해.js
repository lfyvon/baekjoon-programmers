const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(" ").map(Number);
const campus = input.slice(1).map(el => el.trim());
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

const dfs = (x, y) => {
    visited[x][y] = 1;
    if(campus[x][y] === "P") count++;
    for(let i = 0; i < 4; i++){
        let posX = x + dx[i];
        let posY = y + dy[i];

        if(posX < 0 || posX >= n || posY < 0 || posY >= m) continue;
        if(campus[posX][posY] !== "X" && !visited[posX][posY]){
            dfs(posX, posY);
        }
    }
}
dfs(ix, iy);
console.log(!count ? "TT" : count);