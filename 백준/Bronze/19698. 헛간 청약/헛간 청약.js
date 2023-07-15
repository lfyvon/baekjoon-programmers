const [n, w, h, l] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
console.log(Math.min(n, Math.floor(w / l) * Math.floor(h / l)));
