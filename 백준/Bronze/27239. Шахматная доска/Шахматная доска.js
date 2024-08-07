const N = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
console.log(String.fromCharCode((N - 1) % 8 + 97) + (Math.floor((N - 1) / 8) + 1));