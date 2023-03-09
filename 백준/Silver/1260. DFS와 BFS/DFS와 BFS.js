const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [num, pairNum, v] = input[0].trim().split(' ').map(el => parseInt(el));
const graph = [...new Array(num + 1)].map(() => []);

for(let i = 0; i < pairNum; i++){
    let [start, end] = input[i+1].trim().split(' ').map(el => parseInt(el));
    graph[start].push(end);
    graph[end].push(start);
}

const DFS = (graph, startNode) => {
    const visited = [];
    let needVisit = []; 
    needVisit.push(startNode); 

    while (needVisit.length !== 0) { 
        const node = needVisit.shift(); 
        if (!visited.includes(node)) { 
            visited.push(node); 
            needVisit = [...graph[node].sort((a, b) => a - b), ...needVisit];
        }
    }
    return visited;
};

const BFS = (graph, startNode) => {
    const visited = []; 
    let needVisit = []; 
  
    needVisit.push(startNode); 
    
    while (needVisit.length !== 0) { 
      const node = needVisit.shift();
      if (!visited.includes(node)) { 
        visited.push(node); 
        needVisit = [...needVisit, ...graph[node].sort((a, b) => a - b)];
      }
    }
    return visited;
};

console.log(DFS(graph, v).join(' '));
console.log(BFS(graph, v).join(' '));