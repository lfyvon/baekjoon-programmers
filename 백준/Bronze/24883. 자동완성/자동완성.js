const c = require('fs').readFileSync('/dev/stdin').toString().trim();
console.log(c === 'N' || c === 'n' ? "Naver D2" : "Naver Whale");