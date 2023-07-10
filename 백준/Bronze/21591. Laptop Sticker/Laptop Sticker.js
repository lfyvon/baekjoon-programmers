const [wc, hc, ws, hs] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
console.log(wc - 2 >= ws && hc - 2 >= hs ? 1 : 0);