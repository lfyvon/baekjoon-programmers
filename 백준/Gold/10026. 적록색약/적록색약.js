const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const dx = [-1, 1, 0, 0];
const dy = [0, 0 , -1, 1];
const n = parseInt(input[0]);
const rgb = input.slice(1).map(el => el.trim().split(''))
const rgw = rgb.slice();
const visited = Array.from(new Array(n), () => Array(n).fill(0));
const result = [];

function BFS(startX, startY, color){
    const queue = [];
    queue.push([startX, startY]);
    visited[startX][startY] = 1;
    while(queue.length){
        const [x, y] = queue.shift();
        for(let i = 0; i < 4; i++){
            let posX = x + dx[i];
            let posY = y + dy[i];

            if(posX < 0 || posY < 0 || posX >= n || posY
                >= n) continue;
            if(visited[posX][posY] > 0 || rgb[posX][posY] !== color) continue;
            queue.push([posX, posY]);
            visited[posX][posY] = visited[x][y] + 1;

        }
    }
}

function reset(arr){
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            arr[i][j] = 0;
        }
    }
}

let countRGB = 0;
for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
        if(visited[i][j] === 0){
            BFS(i, j, rgb[i][j]);
            countRGB += 1
        }
    }
}

result.push(countRGB);

reset(visited)

for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
        if(rgw[i][j] == 'G') rgw[i][j] = 'R';
    }
}

let countRGW = 0;
for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
        if(visited[i][j] === 0){
            BFS(i, j, rgw[i][j]);
            countRGW += 1
        }
    }
}

result.push(countRGW)

console.log(result.join(' '));