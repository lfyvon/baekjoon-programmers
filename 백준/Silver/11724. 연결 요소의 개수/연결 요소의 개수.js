const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [num, con] = input[0].split(' ').map(el => parseInt(el));
const graph = [...new Array(num + 1)].map(() => []);
const visited = [...new Array(num + 1)].fill(false);
let count = 0;
for(let i = 0; i < con; i++){
    let [start, end] = input[i+1].split(' ').map(el => parseInt(el));
    graph[start].push(end);
    graph[end].push(start);
}

const DFS = (startNode) => {
  visited[startNode] = true;
  for(let i = 0 ; i < graph[startNode].length; i++){
    let nextNode = graph[startNode][i];
    if(!visited[nextNode]){
        DFS([nextNode]);
    }
}
};
for (let i = 1; i <= num; i++) {
  if (!visited[i]) {
    DFS(i);
    count++;
  }
}
console.log(count);