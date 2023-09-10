const n = Number(require('fs').readFileSync('/dev/stdin').toString());
const s = "WelcomeToSMUPC";
console.log(s[(n - 1) % s.length]);