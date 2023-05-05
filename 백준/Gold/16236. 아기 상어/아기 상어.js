const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const n = Number(input[0]);
const graph = input.slice(1).map(el => el.split(' ').map(Number));
const dx = [-1, 0, 0, 1];
const dy = [0, -1, 1, 0];
let sharkX = -1;
let sharkY = -1;
let sharkSize = 2;
let exp = 0;
let result = 0;
for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
        if(graph[i][j] === 9){
            [sharkX, sharkY] = [i, j];
            graph[i][j] = 0;
        }
    }
}

const bfs = (sharkX, sharkY) => {
    const visited = Array.from({length : n} , () => Array.from({length : n}, () => false));
    visited[sharkX][sharkY] = true;
    const queue = [];
    queue.push([sharkX, sharkY, 0]);
    const fish = [];
    while(queue.length){
        const [x, y, dis] = queue.shift();
        for(let i = 0; i < 4; i++){
            let nextX = x + dx[i];
            let nextY = y + dy[i];
            let nextDis = dis + 1;

            if(nextX < 0 || nextX >= n || nextY < 0 || nextY >= n) continue;
            if(visited[nextX][nextY] || graph[nextX][nextY] > sharkSize) continue;
            visited[nextX][nextY] = true;
            queue.push([nextX, nextY, nextDis])
            if(graph[nextX][nextY] !== 0 && graph[nextX][nextY] < sharkSize){
                fish.push([nextX, nextY, nextDis]);
            }
        }
    }
    return fish.sort((a, b) => {
        if(a[2] === b[2]){
            if(a[0] === b[0]) return a[1] - b[1];
            else return a[0] - b[0];
        } else return a[2] - b[2];
    });
}

while(true){
    const fish = bfs(sharkX, sharkY);
    if(fish.length){
        const [x, y, dis] = fish[0];
        graph[x][y] = 0;
        [sharkX, sharkY] = [x, y];
        exp++;
        if(exp === sharkSize){
            sharkSize++;
            exp = 0;
        }
        result += dis;

    } else{
        break;
    }
}

console.log(result);