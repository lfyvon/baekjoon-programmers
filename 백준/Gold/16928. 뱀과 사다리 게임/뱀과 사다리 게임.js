const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number));
const [n, m] = input[0];
const ladder = input.slice(1);
const size = 100;
const board = Array.from({length : size + 1}, (_, i) => i);

for(let i = 0; i < n + m; i++){
    const [from, to] = ladder[i];
    board[from] = to;
}

const bfs = () => {
    const visited = Array.from({length : size + 1}, () => -1);
    const queue = [];
    queue.push(1);
    visited[1] = 0;
    while(queue.length){
        const x = queue.shift();
        for(let i = 1; i <= 6; i++){
            let posX = x + i;
            if(board[posX]) posX = board[posX];
            if(posX > 100 || visited[posX] !== -1) continue;
            visited[posX] = visited[x] + 1;
            queue.push(posX);
        }
    }
    return visited[size];
}

console.log(bfs());