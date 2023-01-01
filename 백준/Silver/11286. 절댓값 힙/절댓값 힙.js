class MinAbsHeap {
    constructor() {
        this.heap = [null];
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
        const curAbs = Math.abs(this.heap[curIdx]);
        
        while(curIdx > 1){
            let parIdx = Math.floor(curIdx / 2);
            const parAbs = Math.abs(this.heap[parIdx]);
            if(parAbs < curAbs || (parAbs === curAbs) && this.heap[parIdx] < this.heap[curIdx]) break;
            this.swap(parIdx, curIdx);
            curIdx = parIdx;
            parIdx = Math.floor(curIdx / 2);
        }
    }

    delete(){
        const min = this.heap[1];
        if(this.heap.length <= 2) this.heap = [null];
        else (this.heap[1]) = this.heap.pop();

        let curIdx = 1;
        let leftIdx = curIdx * 2;
        let rightIdx = curIdx * 2 + 1;
        let curAbs = Math.abs(this.heap[curIdx]);
        let leftAbs = Math.abs(this.heap[leftIdx]);
        let rightAbs = Math.abs(this.heap[rightIdx]);

        if(!this.heap[leftIdx]) return min;
        if(!this.heap[rightIdx]) {
            if((leftAbs < curAbs) || (leftAbs === curAbs && this.heap[leftIdx] < this.heap[curIdx])){
                this.swap(leftIdx, curIdx);
            }
            return min;
        }

        while(leftAbs < curAbs || rightAbs < curAbs || (leftAbs === curAbs && this.heap[leftIdx] < this.heap[curIdx]) || (rightAbs === curAbs && this.heap[rightIdx] < this.heap[curIdx])) {
            const minIdx = leftAbs > rightAbs || (leftAbs === rightAbs && this.heap[leftIdx] > this.heap[rightIdx])? rightIdx : leftIdx;
            this.swap(minIdx, curIdx);
            curIdx = minIdx;
            leftIdx = curIdx * 2;
            rightIdx = curIdx * 2 + 1;
            curAbs = Math.abs(this.heap[curIdx]);
            leftAbs = Math.abs(this.heap[leftIdx]);
            rightAbs = Math.abs(this.heap[rightIdx]);
        }

        return min;
    }
}

const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number);
const n = input[0];
const arr = input.slice(1);
let absMinQueue = new MinAbsHeap();
let result = [];
for(let i = 0; i < n; i++){
    if(arr[i] === 0){
        if(absMinQueue.size() === 0){
            result.push(0);
        } else{
            result.push(absMinQueue.getMin());
            absMinQueue.delete();
        }
    } else{
        absMinQueue.insert([arr[i]]);
    }
}
console.log(result.join('\n'));