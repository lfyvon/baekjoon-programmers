const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const area = input.slice(1).map(el => el.split(' ').map(Number));
const dx = [-1, 0, 1, 0];
const dy = [0, -1, 0, 1];
let maxArea = 0;

const dfs = (x, y, height, visited) => {
    for(let i = 0; i < 4; i++){
        const posX = x + dx[i];
        const posY = y + dy[i];
        if(posX < 0 || posY < 0 || posX >= n || posY >= n || visited[posX][posY]) continue;
        visited[posX][posY] = 1;
        dfs(posX, posY, height, visited);
    }
}

for(let h = 0; h <= 100; h++){
    let count = 0;
    const visited = Array.from(Array(n), () => Array(n).fill(0));
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if(area[i][j] <= h){
                visited[i][j] = 1;
            }
        }
    }

    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if(!visited[i][j]){
                visited[i][j] = 1;
                dfs(i, j, h, visited);
                count++;
            }
        }
    }
    maxArea = Math.max(maxArea, count);
}

console.log(maxArea);