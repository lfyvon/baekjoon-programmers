const resistance = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9
};
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => resistance[el.trim()]);
console.log(('' + input[0] + '' + input[1]) * 10 ** input[2]);