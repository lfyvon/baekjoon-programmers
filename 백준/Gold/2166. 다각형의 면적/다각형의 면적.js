const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const n = Number(input[0]);
const coor = input.slice(1).map(el => el.split(' ').map(Number));
const [x0, y0] = coor[0];
let result = 0;

const ccw = (x1, x2, x3, y1, y2, y3) => {
	return (x1 * y2 + x2 * y3 + x3 * y1 - y1 * x2 - y2 * x3 - y3 * x1) / 2;
}

for(let i = 1; i < n; i++){
    const [x1, y1] = coor[i - 1];
    const [x2, y2] = coor[i];
    result += ccw(x0, x1, x2, y0, y1, y2);
}
console.log(Math.abs(result).toFixed(1));