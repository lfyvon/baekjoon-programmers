const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number));
const [vk, jk] = input[0];
const [vl, jl] = input[1];
const [vh, dh, jh] = input[2];
console.log(vh * dh * jh * (vk * jk + vl * jl));