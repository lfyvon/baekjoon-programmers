class MinHeap {
    constructor() {
        this.heap = [ null ];
    }
    
    size() {
        return this.heap.length - 1;
    }
    
    getMin() {
        return this.heap[1] ?? null;
    }
    
    swap(a, b) {
        [ this.heap[a], this.heap[b] ] = [ this.heap[b], this.heap[a] ];
    }
    
    insert(value) {
        this.heap.push(value);
        let curIdx = this.heap.length - 1;
        let parIdx = Math.floor(curIdx / 2);
        
        while(curIdx > 1 && this.heap[parIdx] > this.heap[curIdx]) {
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
        
        if(this.heap[leftIdx] === undefined) return min;
        if(this.heap[rightIdx] === undefined) {
            if(this.heap[leftIdx] < this.heap[curIdx]) {
                this.swap(leftIdx, curIdx);
            }
            return min;
        }

        while(this.heap[leftIdx] < this.heap[curIdx] || this.heap[rightIdx] < this.heap[curIdx]) {
            const minIdx = this.heap[leftIdx] > this.heap[rightIdx] ? rightIdx : leftIdx;
            this.swap(minIdx, curIdx);
            curIdx = minIdx;
            leftIdx = curIdx * 2;
            rightIdx = curIdx * 2 + 1;
        }

        return min;
    }
}

class MaxHeap {
    constructor() {
        this.heap = [ null ];
    }
    
    size() {
        return this.heap.length - 1;
    }
    
    getMax() {
        return this.heap[1] ?? null;
    }
    
    swap(a, b) {
        [ this.heap[a], this.heap[b] ] = [ this.heap[b], this.heap[a] ];
    }
    
    insert(value) {
        this.heap.push(value);
        let curIdx = this.heap.length - 1;
        let parIdx = (curIdx / 2) >> 0;
        
        while(curIdx > 1 && this.heap[parIdx] < this.heap[curIdx]) {
            this.swap(parIdx, curIdx)
            curIdx = parIdx;
            parIdx = Math.floor(curIdx / 2);
        }
    }
    
    delete() {
        const max = this.heap[1];	
        if(this.heap.length <= 2) this.heap = [ null ];
        else this.heap[1] = this.heap.pop();   
        
        let curIdx = 1;
        let leftIdx = curIdx * 2;
        let rightIdx = curIdx * 2 + 1; 
        if(this.heap[leftIdx] === undefined) return max;
        if(this.heap[rightIdx] === undefined) {
            if(this.heap[leftIdx] > this.heap[curIdx]) {
                this.swap(leftIdx, curIdx);
            }
            return max;
        }

        while(this.heap[leftIdx] > this.heap[curIdx] || this.heap[rightIdx] > this.heap[curIdx]) {
            const maxIdx = this.heap[leftIdx] < this.heap[rightIdx] ? rightIdx : leftIdx;
            this.swap(maxIdx, curIdx);
            curIdx = maxIdx;
            leftIdx = curIdx * 2;
            rightIdx = curIdx * 2 + 1;
        }

        return max;
    }
}

const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number);
const minQueue = new MinHeap();
const maxQueue = new MaxHeap();
const n = input[0];
const result = [input[1]];
maxQueue.insert(input[1]);
for(let i = 2; i <= n; i++){
    if(input[i] > maxQueue.getMax()) minQueue.insert(input[i]);
    else maxQueue.insert(input[i]);
    if(minQueue.size() > maxQueue.size()){
        maxQueue.insert(minQueue.delete());
    } else if(minQueue.size() + 1 < maxQueue.size()){
        minQueue.insert(maxQueue.delete());
    }
    result.push(maxQueue.getMax());
}
console.log(result.join("\n"));