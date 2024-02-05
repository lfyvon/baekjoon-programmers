const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const happyCount = input.split(":-)").length - 1;
const sadCount = input.split(":-(").length - 1;
console.log(happyCount === 0 && sadCount === 0 ? "none" : happyCount > sadCount ? "happy" : happyCount < sadCount ? "sad" : "unsure");