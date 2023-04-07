const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(el => el.split(' ').map(Number));
const [x1, y1] = input[0];
const [x2, y2] = input[1];
const [x3, y3] = input[2];
const ccw = (x2 - x1) * (y3 - y1) - (x3 - x1) * (y2 - y1);
console.log(ccw > 0 ? 1 : ccw < 0 ? -1 : 0);