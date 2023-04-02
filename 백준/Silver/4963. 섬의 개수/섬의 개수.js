const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const dx = [-1, 0, 1, -1, 1, -1, 0, 1];
const dy = [-1, -1, -1, 0, 0, 1, 1, 1];
let w, h, graph, visited;
const result = [];
let i = 0;

const countLand = () => {
    let count = 0;
    for(let i = 0; i < h; i++){
      for(let j = 0; j < w; j++){
        if(graph[i][j]){
          BFS(i, j);
          count++;
        }
      }
    }
    result.push(count);
}

const BFS = (startX, startY) => {
    const queue = [[startX, startY]];
    while(queue.length){
      const [x, y] = queue.shift();
      if(!graph[x][y]) continue;
      else graph[x][y] = 0;
      
      for(let i = 0; i < 8; i++){
        const xPos = x + dx[i];
        const yPos = y + dy[i];
        if(xPos < 0 || yPos < 0 || xPos >= h || yPos >= w) continue;
        if(graph[xPos][yPos]) queue.push([xPos, yPos]);
      }
    }
}

while(true){
    if(input[i] === "0 0") break;
    [w, h] = input[i].split(' ').map(Number);
    i++;
    graph = input.slice(i, i + h).map(el => el.split(' ').map(Number));
    countLand();
    i += h;
}

console.log(result.join('\n'));