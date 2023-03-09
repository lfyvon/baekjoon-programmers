let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let count = parseInt(input.shift());
let deque = [];
let result = [];

const cmdObj = {
    push_front: x => {
        deque.unshift(x);
    },
    push_back: x => {
        deque.push(x);
    },
    pop_front: () => {
      return deque.length === 0 ? -1 : deque.shift()
    },
    pop_back: () => {
        return deque.length === 0 ? -1 : deque.pop()
      },
    size: () => {
      return deque.length;
    },
    empty: () => {
      return deque.length === 0 ? 1 : 0
    },
    front: () => {
      return deque.length === 0 ? -1 : deque[0]
    },
    back: () => {
        return deque.length === 0 ? -1 : deque[deque.length - 1]
    }
  }

for(let i = 0; i < count; i++) {
    const [cmd, num] = input[i].trim().split(" ");
    if (cmd === 'push_front') {
        cmdObj.push_front(parseInt(num));
    } else if (cmd === 'push_back'){
        cmdObj.push_back(parseInt(num));
    }
    else result.push(cmdObj[cmd]());
}
console.log(result.join("\n"));