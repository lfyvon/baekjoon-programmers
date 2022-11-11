let n = parseInt(require('fs').readFileSync('/dev/stdin').toString());
console.log('long '.repeat(n / 4) + 'int');