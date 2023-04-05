const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [r, c] = input[0].split(' ').map(Number);
const board = input.slice(1).map(el => el.trim());
const visited = new Array(26).fill(0);
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];
let maxCount = 0;

const dfs = (x, y, count) => {
    maxCount = Math.max(maxCount, count);
    for(let i = 0; i < 4; i++){
        const posX = x + dx[i];
        const posY = y + dy[i];
        if(posX < 0 || posY < 0 || posX >= r || posY >= c) continue;
        const num = board[posX][posY].charCodeAt() - 65;
        if(!visited[num]){
            visited[num] = 1;
            dfs(posX, posY, count + 1);
            visited[num] = 0;
        }
    }
}
visited[board[0][0].charCodeAt() - 65] = 1;
dfs(0, 0, 1);
console.log(maxCount);