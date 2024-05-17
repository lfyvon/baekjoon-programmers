const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const vowel = 'aeiou';
let count = 0;
let yCount = input.split("y").length - 1;
for(let i = 0; i < vowel.length; i++){
    count += input.split(`${vowel[i]}`).length - 1;
}
console.log(count, count + yCount);