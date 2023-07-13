const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number));
const [ca, ba, pa] = input[0];
const [cr, br, pr] = input[1];
console.log((cr - ca < 0 ? 0 : cr - ca) + (br - ba < 0 ? 0 : br - ba) + (pr - pa < 0 ? 0 : pr - pa));