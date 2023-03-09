const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const num = parseInt(input[0]);
const pairNum = parseInt(input[1]);
const graph = [...new Array(num + 1)].map(() => []);

for(let i = 0; i < pairNum; i++){
    let [start, end] = input[i+2].trim().split(' ').map(el => parseInt(el));
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
            needVisit = [...graph[node], ...needVisit];
        }
    }
    return visited;
};
  
console.log(DFS(graph, 1).length-1);