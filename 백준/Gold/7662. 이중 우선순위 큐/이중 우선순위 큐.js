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

        if(this.heap[leftIdx] === null) return m;
        if(this.heap[rightIdx] === null){
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

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line)
})
  .on('close', function () {
    let n = 0;
    const t = +input[n++];
    
    const result = [];
    for (let i = 0; i < t; i++) {
      const k = +input[n++];
      const maxHeap = new PriorityQueue((a, b) => a > b);
      const minHeap = new PriorityQueue((a, b) => a < b);
      const check = {};
    
      for (let j = 0; j < k; j++) {
        const [op, num] = input[n++].split(" ");
    
        if (op === "I") {
          minHeap.insert(+num);
          maxHeap.insert(+num);
    
          if (check[+num]) {
            check[+num]++;
          } else {
            check[+num] = 1;
          }
        } else if (+num === 1) {
          while (maxHeap.size()) {
            const item = maxHeap.getTop();
            maxHeap.delete();
    
            if (check[item] > 0) {
                check[item]--;
              break;
            }
          }
        } else if (+num === -1) {
          while (minHeap.size()) {
            const item = minHeap.getTop();
            minHeap.delete();
    
            if (check[item] > 0) {
                check[item]--;
              break;
            }
          }
        }
      }
      while (maxHeap.size() && check[maxHeap.getTop()] === 0) {
        maxHeap.delete();
      }
      while (minHeap.size() && check[minHeap.getTop()] === 0) {
        minHeap.delete();
      }
    
      if (!minHeap.size() && !maxHeap.size()) {
        result.push("EMPTY");
      } else {
        result.push(`${maxHeap.getTop()} ${minHeap.getTop()}`);
      }
    }
    
    console.log(result.join("\n"));
    process.exit();
});