const N = parseInt(require('fs').readFileSync('/dev/stdin').toString());
let arr = Array.from(new Array(N), () => new Array(N).fill("*"));
console.log(arr.map(el => el.join('')).join("\n"));