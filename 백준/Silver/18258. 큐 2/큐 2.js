class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(item) {
    const node = new Node(item);
    if (this.head === null) {
      this.head = node;
      this.head.next = this.tail;
    } else this.tail.next = node;

    this.tail = node;
    this.size += 1;
  }

  length() {
    return this.size;
  }

  pop() {
    if(!this.size) return -1;
    const popedItem = this.head.item;
    if(this.size > 2){
      this.head = this.head.next;
    } else if(this.size === 2){
      this.tail = this.head.next;
      this.head = this.head.next;
    } else if(this.size === 1){
      this.head = null;
      this.tail = null;
    }
    this.size -= 1;
    return popedItem;
  }

  empty(){
    return this.size ? 0 : 1;
  } 

  front(){
    return this.size ? this.head.item : -1;
  }

  back(){
    return this.size ? this.tail.item : -1;
  }
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const queue = new Queue();
const result = [];
for(let i = 1; i <= n; i++){
    const [cmd, num] = input[i].trim().split(" ");
    if(cmd === "push"){
      queue.push(num);
    } else if(cmd === "size"){
      result.push(queue.length());
    } else if(cmd === "empty"){
      result.push(queue.empty());
    } else if(cmd === "pop"){
      result.push(queue.pop());
    } else if(cmd === "front"){
      result.push(queue.front());
    } else if(cmd === "back"){
      result.push(queue.back());
    }
}
console.log(result.join("\n"));