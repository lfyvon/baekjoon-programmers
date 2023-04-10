class MinHeap{
    constructor(){
        this.heap = [ null ];
    }

    size(){
        return this.heap.length - 1;
    }

    swap = (a, b) => {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }

    insert = (value) => {
        this.heap.push(value);
        let curIdx = this.heap.length - 1;
        let parIdx = Math.floor(curIdx / 2);

        while(curIdx > 1 && this.heap[parIdx] > this.heap[curIdx]){
            this.swap(parIdx, curIdx);
            curIdx = parIdx;
            parIdx = Math.floor(curIdx / 2);
        }
    }

    delete(){
        const min = this.heap[1];
        if(this.heap.length <= 2) this.heap = [ null ];
        else this.heap[1] = this.heap.pop();

        let curIdx = 1;
        let leftIdx = curIdx * 2;
        let rightIdx = curIdx * 2 + 1;

        if(!this.heap[leftIdx]) return min;
        if(!this.heap[rightIdx]){
            if(this.heap[leftIdx] < this.heap[curIdx]){
                this.swap(leftIdx, curIdx);
            }
            return min;
        }

        while(this.heap[leftIdx] < this.heap[curIdx] || this.heap[rightIdx] < this.heap[curIdx]){
            const minIdx = this.heap[leftIdx] > this.heap[rightIdx] ? rightIdx : leftIdx;
            this.swap(minIdx, curIdx);
            curIdx = minIdx;
            leftIdx = curIdx * 2;
            rightIdx = curIdx * 2 + 1;
        }
        return min;
    }
}

const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number);
const n = input[0];
const minQueue = new MinHeap();
let result = 0;
for(let i = 1; i <= n; i++){
    minQueue.insert(input[i]);
}

if(n !== 1){
    while(minQueue.size() > 1){
        const a = minQueue.delete();
        const b = minQueue.delete();
        result += a + b;
        minQueue.insert(a + b);
    }
}

console.log(result);