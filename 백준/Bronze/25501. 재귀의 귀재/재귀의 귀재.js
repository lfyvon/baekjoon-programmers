const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const t = Number(input[0]);
let count = 0;
const result = [];
const recursion = (s, l, r) => {
    count++;
    if(l >= r) return 1;
    else if(s[l] != s[r]) return 0;
    else return recursion(s, l + 1, r - 1);
}

const isPalindrome = (s) => {
    return recursion(s, 0, s.length - 1);
}

for(let i = 1; i <= t; i++){
    let s = input[i].trim();
    count = 0;    
    result.push(isPalindrome(s) + ' ' + count);
}
console.log(result.join('\n'));