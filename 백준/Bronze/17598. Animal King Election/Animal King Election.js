const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.trim());
let t = l = 0;

for(let i = 0; i < input.length; i++){
    if(input[i] === 'Tiger') t++;
    else l++;
}
console.log(t >= 5 ? 'Tiger' : 'Lion');