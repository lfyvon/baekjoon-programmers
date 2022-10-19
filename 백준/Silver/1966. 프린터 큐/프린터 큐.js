const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const t = parseInt(input[0]);
let result = [];
for(let i = 1; i <= t * 2; i += 2){
    let [n, m] = input[i].split(' ').map(el => parseInt(el));
    let queue = input[i + 1].split(' ').map(el => parseInt(el));
    let count = 0;
    while(true){
        let topPry = Math.max(...queue);
        let num = queue.shift();
        if(num === topPry){
            count++;
            if(m === 0){
                result.push(count);
                break;
            }
        } else{
            queue.push(num);
        }
        if(m === 0){
            m = queue.length - 1;
        } else{
            m--;
        }
    }
}

console.log(result.join('\n'));