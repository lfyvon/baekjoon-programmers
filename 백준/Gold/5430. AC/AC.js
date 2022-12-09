const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const t = parseInt(input);
const AC = input.slice(1);
let result = "";
for(let i = 0; i < t * 3; i += 3){
    const p = AC[i].trim().split('');
    const n = parseInt(AC[i + 1]);
    const x = AC[i + 2].slice(1, -1).split(',').map(el => parseInt(el)).filter(Boolean);
    let isReverse = false;
    let check = true;
    for(let j = 0; j < p.length; j++){
        if(p[j] === 'R'){
            isReverse = !isReverse;
        }
        if(p[j] === 'D'){
            if(!x.length) check = false;
            else{
                if(isReverse) x.pop();
                else x.shift();
            }   
        }
    }
    if(isReverse) x.reverse();
    if(check) result += '[' + x.join(',') +']' + '\n';
    else result += 'error' + '\n';
}

console.log(result.trim());