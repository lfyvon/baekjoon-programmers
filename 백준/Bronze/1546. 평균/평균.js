let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let count = Number(input[0]);
let num = input[1].split(' ').map(Number);
let maxNum = Math.max(...num);
let score = num.map((el) => (el/maxNum*100));
let result = score.reduce((acc, cur, idx) => {return acc += cur;}, 0);

console.log(result/score.length);

