const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const dx = [-1, 0, 1, -1, 1, -1, 0, 1];
const dy = [-1, -1, -1, 0, 0, 1, 1, 1];
let w, h, graph;
const result = [];
let i = 0;

const DFS = (x, y) => {
    if(x < 0 || y < 0 || x >= h || y >= w) return;
    if(graph[x][y]){
        graph[x][y] = 0;
        for(let i = 0; i < 8; i++){
            const xPos = x + dx[i];
            const yPos = y + dy[i];
            DFS(xPos, yPos);
        }
    }
}

while(true){
    if(input[i] === "0 0") break;
    [w, h] = input[i].split(' ').map(Number);
    i++;
    graph = input.slice(i, i + h).map(el => el.split(' ').map(Number));
    let count = 0;
    for(let i = 0; i < h; i++){
      for(let j = 0; j < w; j++){
        if(graph[i][j]){
          DFS(i, j);
          count++;
        }
      }
    }
    result.push(count);
    i += h;
}

console.log(result.join('\n'));