let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const dx = [-1, 1, 0, 0];
const dy = [0, 0, 1, -1]; 
const t = parseInt(input.shift());
let m, n, k, graph;
let result = [];

const countWorm = () => {
  let count = 0;
  for(let i = 0; i < n; i++){
    for(let j = 0; j < m; j++){
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
    
    for(let i = 0; i < 4; i++){
      const xPos = x + dx[i];
      const yPos = y + dy[i];

      if(xPos < 0 || yPos < 0 || xPos >= n || yPos >= m) continue;
      if(graph[xPos][yPos]) queue.push([xPos, yPos]);
    }
  }
}

for(let i = 0; i < t; i ++){
  [m, n, k] = input.shift().split(' ').map(el => parseInt(el));
  graph = Array.from(Array(n), () => Array(m).fill(0));
  for(let j = 0; j < k; j++){
    let [cx, cy]  = input[j].split(' ').map(el => parseInt(el));
    graph[cy][cx] = 1;
  }
  countWorm();

  input = input.slice(k);
}


console.log(result.join('\n'));