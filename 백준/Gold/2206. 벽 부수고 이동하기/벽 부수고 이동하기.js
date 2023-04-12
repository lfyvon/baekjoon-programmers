const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const map = input.slice(1).map(el => el.split('').map(Number));
const dx = [-1, 0, 1, 0];
const dy = [0, -1, 0, 1];
const check = Array.from({ length: n }, () => Array.from({ length: m }, () => Array.from({ length: 2 }, () => 0)));
const queue = [];
queue.push([0, 0, 0]);
check[0][0][0] = 1;
const bfs = () => {
    let idx = 0;
    while(idx !== queue.length){
        const [x, y, b] = queue[idx];
        if(x === n - 1 && y === m - 1){
            return check[x][y][b];
        }
        for(let i = 0; i < 4; i++){
            const [posX, posY] = [x + dx[i], y + dy[i]];
            if(posX < 0 || posY < 0 || posX >= n || posY >= m) continue;
            
            if(!map[posX][posY] && !check[posX][posY][b]){
                check[posX][posY][b] = check[x][y][b] + 1;
                queue.push([posX, posY, b]);
            } else if(map[posX][posY] && !b){
                check[posX][posY][b + 1] = check[x][y][b] + 1;
                queue.push([posX, posY, b + 1]);
            }
        }
        idx++;
    }
    return -1;
}

console.log(bfs());