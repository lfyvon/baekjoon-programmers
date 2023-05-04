const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, C] = input[0].split(' ').map(Number);
const coor = input.slice(1).map(Number).sort((a, b) => a - b);

const checkDis = (dis) => {
    let count = 1;
    let startCoor = coor[0];
    for(let i = 1; i < N; i++){
        if(coor[i] - startCoor >= dis){
            count++;
            startCoor = coor[i];
        }
    }
    return count >= C;
}

let low = 1;
let high = coor[coor.length - 1];

while(low <= high){
    const mid = Math.floor((low + high) / 2);
    if(checkDis(mid)){
        low = mid + 1;
    } else{
        high = mid - 1;
    }
}
console.log(high);