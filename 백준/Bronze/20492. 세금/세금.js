const N = Number(require('fs').readFileSync('/dev/stdin').toString());
const opt1 = N * (100 - 22) / 100;
const opt2 = (N * 80 / 100) + (N * 20 / 100 * (100 - 22) / 100);
console.log(opt1 + ' ' + opt2);