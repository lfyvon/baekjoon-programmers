const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const track = input[1].trim();
const alice = input[2];
console.log(track.split(alice).length - 1);