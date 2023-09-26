const x = Number(require('fs').readFileSync('/dev/stdin').toString());
const bi = x.toString(2);
console.log(bi.split('').reduce((a, b) => a + Number(b), 0));