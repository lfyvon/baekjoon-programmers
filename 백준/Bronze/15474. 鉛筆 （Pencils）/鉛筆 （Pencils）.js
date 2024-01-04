const [N, X, XPrice, Y, YPrice] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
console.log(Math.min(Math.ceil(N / X) * XPrice, Math.ceil(N / Y) * YPrice));