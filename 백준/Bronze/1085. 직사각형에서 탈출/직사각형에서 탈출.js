let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const [x, y, w, h] = input.map((el) => Number(el));

const arr = [x, y, w-x, h-y];
console.log(Math.min(...arr));