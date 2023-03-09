let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(el => parseInt(el));
const notl = new Set();
const nots = new Set();
let result = [];
for(let i = 1; i <= n + m; i++){
    if(i <= n){
        notl.add(input[i].trim());
    } else{
        nots.add(input[i].trim());
    }
}

nots.forEach(el => {
    if(notl.has(el)) result.push(el);    
});
result.sort();
console.log(result.length+'\n'+result.join('\n'));