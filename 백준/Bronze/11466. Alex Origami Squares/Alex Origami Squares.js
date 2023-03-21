const [h, w] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number).sort((a, b) => b - a);
console.log(Math.max(h / 3 <= w ? h / 3 : w, w / 2));