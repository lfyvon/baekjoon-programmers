const input = require('fs').readFileSync('/dev/stdin').toString();
const a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";
console.log(input.replace(/[a-z]/gi, c => b[a.indexOf(c)]));