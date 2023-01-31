class MinHeap {
    constructor() {
        this.heap = [ null ];
    }
    
    size() {
        return this.heap.length - 1;
    }
    
    getMin() {
        return this.heap[1] ? this.heap[1] : null;
    }
    
    swap(a, b) {
        [ this.heap[a], this.heap[b] ] = [ this.heap[b], this.heap[a] ];
    }
    
    insert(value) {
        this.heap.push(value);
        let curIdx = this.heap.length - 1;
        while(curIdx > 1) {
            let parIdx = Math.floor(curIdx / 2);
            if(this.heap[parIdx][1] < this.heap[curIdx][1]) break;
            this.swap(parIdx, curIdx)
            curIdx = parIdx;
            parIdx = Math.floor(curIdx / 2);
        }

    }
    
    delete() {
        const min = this.heap[1];	
        if(this.heap.length <= 2) this.heap = [ null ];
        else this.heap[1] = this.heap.pop();   
        
        let curIdx = 1;
        let leftIdx = curIdx * 2;
        let rightIdx = curIdx * 2 + 1; 
        
        if(!this.heap[leftIdx]) return min;
        if(!this.heap[rightIdx]) {
            if(this.heap[leftIdx][1] < this.heap[curIdx][1]) {
                this.swap(leftIdx, curIdx);
            }
            return min;
        }
       
        while(true) {
            if(leftIdx >= this.heap.length || rightIdx >= this.heap.length) break;
            const leftCost = this.heap[leftIdx][1];
            const rightCost = this.heap[rightIdx][1];
            const curCost = this.heap[curIdx][1];
            if(leftCost > curCost && rightCost > curCost) break;
            const minIdx = leftCost > rightCost ? rightIdx : leftIdx;
            this.swap(minIdx, curIdx);
            curIdx = minIdx;
            leftIdx = curIdx * 2;
            rightIdx = curIdx * 2 + 1;
        }

        return min;
    }
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number));
const [v, e] = input[0];
const k = input[1][0];
const minQueue = new MinHeap();
const graph =  Array.from(Array(v + 1), () => []);
const distance = Array(v + 1).fill(Infinity);
const visited = Array(v + 1).fill(0);

for(let i = 2; i < e + 2; i++){
    const [u, v, w] = input[i];
    graph[u].push([v, w]);
}

distance[k] = 0;
minQueue.insert([k, 0]);

while(minQueue.size()){
    const [cur, dist] = minQueue.delete();
    if(visited[cur]) continue;
    visited[cur] = 1;
    for(let [next, nextDist] of graph[cur]){
        if(distance[next] > distance[cur] + nextDist){
            distance[next] = distance[cur] + nextDist;
            minQueue.insert([next, distance[next]]);
        }
    }
}
let result = distance.slice(1).map(el => el === Infinity ? 'INF' : el);

console.log(result.join('\n'));