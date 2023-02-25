const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const sum = input.reduce((a, b) => a + b, 0);
const name = ['Soongsil', 'Korea', 'Hanyang']
console.log(sum >= 100 ? 'OK' : name[input.indexOf(Math.min(...input))]);