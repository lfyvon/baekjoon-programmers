const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m, inven] = input[0].split(' ').map(el => parseInt(el));
const curHeight = input.slice(1).map(el => el.split(" ").map(el => parseInt(el)));
let max_height = 0;
let total_time = n * m * 256;

for(let i = 0; i <= 256; i++){
    let toAdd = 0
    let toRemove = 0
    for(let j = 0; j < n; j++){
        for(let k = 0; k < m; k++){
            let sum = curHeight[j][k] - i;
            if(sum < 0){
                toAdd -= sum
            } else{
                toRemove += sum
            }
        }
    }
    if(inven + toRemove >= toAdd){
        let curTime = 2 * toRemove + toAdd
        if(total_time >= curTime){
            total_time = curTime
            max_height = i;
        }
    }

}

console.log(total_time, max_height);