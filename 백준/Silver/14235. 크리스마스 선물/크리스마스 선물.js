class MaxHeap {
    constructor() {
        this.heap = [ null ];
    }
    
    size() {
        return this.heap.length - 1;
    }
    
    getMax() {
        return this.heap[1] ? this.heap[1] : null;
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
            parIdx = (curIdx / 2) >> 0;
        }
    }
    
    delete() {
        const max = this.heap[1];	
        if(this.heap.length <= 2) this.heap = [ null ];
        else this.heap[1] = this.heap.pop();   
        
        let curIdx = 1;
        let leftIdx = curIdx * 2;
        let rightIdx = curIdx * 2 + 1; 
        
        if(!this.heap[leftIdx]) return max;
        if(!this.heap[rightIdx]) {
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

const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(el => el.split(' ').map(el => parseInt(el)));

const n = input[0];
const a = input.slice(1);
const present = new MaxHeap();
let result = [];
for(let i = 0; i < n; i++){
    if(a[i][0] === 0){
        if(present.size() === 0){
            result.push(-1);
        } else {
            result.push(present.getMax());
            present.delete();
        }
    } else {
        for(let j = 1; j <= a[i][0]; j++){
            present.insert(a[i][j]);
        }        
    }
}

console.log(result.join('\n'));