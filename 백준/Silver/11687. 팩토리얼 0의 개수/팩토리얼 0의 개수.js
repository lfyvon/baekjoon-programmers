let M = Number(require('fs').readFileSync('/dev/stdin').toString());
let low = 0;
let high = M * 5;
let N = 0;

const countZero = (n) => {
    let count = 0;
    while(n > 0){
        n = parseInt(n / 5);
        count += n;
    }
    return count;
}

while(low <= high){
    let mid = parseInt((low + high) / 2);

    count = countZero(mid);

    if(count < M){
        low = mid + 1;
    } else{
        high = mid - 1;
        N = mid;
    }
}

if(countZero(N) !== M) N = -1;

console.log(N);