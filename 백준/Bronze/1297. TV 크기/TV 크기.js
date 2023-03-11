const [d, h, w] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);
const len = Math.sqrt(d * d / (h * h + w * w));
console.log(Math.floor(len * h) + ' ' + Math.floor(len * w));