const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const list = arr.map(el => el.split(' ').map(el => parseInt(el))); 
let result = [];
for(let i = 0; i < n; i++){
    let count = 1;
    for(let j = 0; j < n; j++){
        if(i === j) continue;
        else if(list[i][0] < list[j][0] && list[i][1] < list[j][1]) count++;
    }
    result.push(count);
}
console.log(result.join(' '));