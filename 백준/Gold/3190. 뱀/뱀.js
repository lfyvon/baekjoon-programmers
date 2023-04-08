class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.head = null;
        this.rear = null;
        this.length = 0;
    }

    enqueue(data){
        const node = new Node(data);
        if (!this.length) {
            this.head = node;
            this.rear = node;
        } else {
            this.head.next = node;
            this.head = node;
        }
        this.length++;
    }

    dequeue(){
        if (!this.length) {
            return;
          }
            
        const deletedNodeData = this.rear.data;
        
        if (this.length === 1) {
            this.head = null;
            this.rear = null;
        } else {
            this.rear = this.rear.next;
        }
        this.length--;
        return deletedNodeData;
    }
}

const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const n = Number(input[0]);
const k = Number(input[1]);
const apple = input.slice(2, k + 2).map(el => el.split(' ').map(Number));
const dir = input.slice(k + 3).reduce((acc, v) => {
    const [time, direction] = v.trim().split(' ');
    acc[time] = direction;
    return acc;
  }, {});
const board = [...Array(n + 1)].map(() => Array(n + 1).fill(0));
apple.forEach(([x, y]) => board[x][y] = 2);
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];
const snake = new Queue();
snake.enqueue([1, 1]);
let direction = 0;
let time = 0;

const rotate = (s, d) => {
    return s === "L" ? (d + 3) % 4 : (d + 1) % 4;
}

while(true){
    time++;
    const [x, y] = snake.head.data;
    const posX = x + dx[direction];
    const posY = y + dy[direction];
    
    if(posX < 1 || posY < 1 || posX > n || posY > n || board[posX][posY] === 1) break;

    if(!board[posX][posY]){
        const [nx, ny] = snake.dequeue();
        board[nx][ny] = 0;
    }

    snake.enqueue([posX, posY]);
    board[posX][posY] = 1;

    if(dir[time]){ 
        direction = rotate(dir[time], direction);
    }
}

console.log(time);