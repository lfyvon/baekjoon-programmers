const [str1,str2] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.trim());
console.log(str1.split(str2).length - 1);