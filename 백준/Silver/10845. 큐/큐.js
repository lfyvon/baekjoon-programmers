let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let count = parseInt(input.shift());
let queue = [];
let result = [];

const cmdObj = {
    push: x => {
        queue.push(x);
    },
    pop: () => {
      return queue.length === 0 ? -1 : queue.shift()
    },
    size: () => {
      return queue.length;
    },
    empty: () => {
      return queue.length === 0 ? 1 : 0
    },
    front: () => {
      return queue.length === 0 ? -1 : queue[0]
    },
    back: () => {
        return queue.length === 0 ? -1 : queue[queue.length - 1]
    }
  }

for(let i = 0; i < count; i++) {
    const [cmd, num] = input[i].trim().split(" ");
    if (cmd === 'push') cmdObj.push(parseInt(num));
    else result.push(cmdObj[cmd]());
}
console.log(result.join("\n"));