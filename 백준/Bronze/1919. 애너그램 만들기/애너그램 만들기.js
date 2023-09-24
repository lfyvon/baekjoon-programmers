const [str1, str2] = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(el => el.trim());
let result = 0;
const countAlpa = (str) => {
    const alpa = new Array(26).fill(0);
    for(let i = 0; i < str.length; i++){
        alpa[str.charCodeAt(i) - 97]++;
    }
    return alpa;
}

const count1 = countAlpa(str1);
const count2 = countAlpa(str2);
for(let i = 0; i < 26; i++){
    result += Math.abs(count1[i] - count2[i]);
}
console.log(result)