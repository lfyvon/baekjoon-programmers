class PriorityQueue{
    constructor(compare){
        this.heap = [ null ];
        this.compare = compare;
    }

    size(){
        return this.heap.length - 1;
    }

    getTop(){
        return this.heap[1] ?? null;
    }

    swap(a, b){
        [ this.heap[a], this.heap[b] ] = [ this.heap[b], this.heap[a] ];
    }

    insert(value){
        this.heap.push(value);
        let curIdx = this.heap.length - 1;
        let parIdx = Math.floor(curIdx / 2);

        while(curIdx > 1 && this.compare(this.heap[curIdx], this.heap[parIdx])){
            this.swap(parIdx, curIdx);
            curIdx = parIdx;
            parIdx = Math.floor(curIdx / 2);
        }
    }

    delete(){
        const m = this.heap[1];
        if(this.heap.length <= 2) this.heap = [ null ];
        else this.heap[1] = this.heap.pop();

        let curIdx = 1;
        let leftIdx = curIdx * 2;
        let rightIdx = curIdx * 2 + 1;

        if(this.heap[leftIdx] === undefined) return m;
        if(this.heap[rightIdx] === undefined){
            if(this.compare(this.heap[leftIdx], this.heap[curIdx])){
                this.swap(leftIdx, curIdx);
            }
            return m;
        }

        while(this.compare(this.heap[leftIdx], this.heap[curIdx]) || this.compare(this.heap[rightIdx], this.heap[curIdx])){
            const mIdx = this.compare(this.heap[rightIdx], this.heap[leftIdx]) ? rightIdx : leftIdx;
            this.swap(mIdx, curIdx);
            curIdx = mIdx;
            leftIdx = curIdx * 2;
            rightIdx = curIdx * 2 + 1;
        }
        return m;
    }
}


const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number);
const minQueue = new PriorityQueue((a, b) => a < b);
const maxQueue = new PriorityQueue((a, b) => a > b);
const n = input[0];
const result = [input[1]];
maxQueue.insert(input[1]);
for(let i = 2; i <= n; i++){
    if(input[i] > maxQueue.getTop()) minQueue.insert(input[i]);
    else maxQueue.insert(input[i]);
    if(minQueue.size() > maxQueue.size()){
        maxQueue.insert(minQueue.delete());
    } else if(minQueue.size() + 1 < maxQueue.size()){
        minQueue.insert(maxQueue.delete());
    }
    result.push(maxQueue.getTop());
}
console.log(result.join("\n"));