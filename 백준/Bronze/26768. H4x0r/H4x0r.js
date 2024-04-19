const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('');
const convert = {
    "a" : 4,
    "e" : 3,
    "i" : 1,
    "o" : 0,
    "s" : 5
}
const str = input.map(el => el = convert[el] ?? el).join("");
console.log(str);