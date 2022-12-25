const [Ur, Tr, Uo, To] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);
console.log(56 * Ur + 24 * Tr + 14 * Uo + 6 * To);