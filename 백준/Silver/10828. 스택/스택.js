let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let count = parseInt(input[0]);
let stack = [];
let result = [];

const cmdObj = {
    push: x => {
      stack.push(x);
    },
    pop: () => {
      return stack.length === 0 ? -1 : stack.pop()
    },
    size: () => {
      return stack.length;
    },
    empty: () => {
      return stack.length === 0 ? 1 : 0
    },
    top: () => {
      return stack.length === 0 ? -1 : stack[stack.length - 1]
    }
  }

for(let i = 1; i <= count; i++) {
    const [cmd, num] = input[i].trim().split(" ");
    if (cmd === 'push') cmdObj.push(parseInt(num));
    else result.push(cmdObj[cmd]());
}
console.log(result.join("\n"));