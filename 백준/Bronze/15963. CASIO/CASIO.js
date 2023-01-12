const [N, M] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);
N === M ? console.log(1) : console.log(0);;