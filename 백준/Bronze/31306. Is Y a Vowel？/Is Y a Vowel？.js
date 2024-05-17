const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const vowel = 'aeiou';
let count = 0;
let yCount = 0;
for(let i = 0; i < input.length; i++){
    if(vowel.includes(input[i])) count++;
    if(input[i].includes('y')) yCount++;
}
console.log(count, count + yCount);