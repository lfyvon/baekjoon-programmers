const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const [n, m] = input[0].split(' ').map(el => parseInt(el));
const paper = input.slice(1).map(el => el.trim().split(' ').map(v => parseInt(v)));
let max = 0;

for(let i = 0; i < n; i++){
    let sum = 0;
    for(let j = 0; j < m; j++){
        sum += paper[i][j];
        if(j >= 4){
            sum -= paper[i][j - 4];
        }
        if(max < sum){
            max = sum;
        }
    }
}

for(let i = 0; i < m; i++){
    let sum = 0;
    for(let j = 0; j < n; j++){
        sum += paper[j][i];
        
        if(j >= 4){
            sum -= paper[j - 4][i];
        }
        if(max < sum){
            max = sum;
        }
    }
}

for(let i = 1; i < n; i++){
    let sum = 0;
    for(let j = 0; j < m; j++){
        sum += paper[i - 1][j] + paper[i][j];
        if(j >= 2){
            sum -= paper[i - 1][j - 2] + paper[i][j - 2];
        }
        if(max < sum){
            max = sum;
        }
    }
}

let sumArr = new Array(8).fill(0);
for(let i = 2; i < n; i++){
    let sum = 0;
    for(let j = 0; j < m; j++){
        sum += paper[i - 2][j] + paper[i - 1][j] + paper[i][j];
        if(j >= 2){
            sum -= paper[i - 2][j - 2] + paper[i - 1][j - 2] + paper[i][j - 2];
        }
        if(j > 0){
            sumArr[0] = sum - (paper[i - 2][j] + paper[i - 1][j]);
            sumArr[1] = sum - (paper[i - 2][j - 1] + paper[i - 1][j - 1]);
            sumArr[2] = sum - (paper[i][j] + paper[i - 1][j]);
            sumArr[3] = sum - (paper[i][j - 1] + paper[i - 1][j - 1]);
            sumArr[4] = sum - (paper[i - 2][j] + paper[i][j - 1]);
            sumArr[5] = sum - (paper[i - 2][j - 1] + paper[i][j]);
            sumArr[6] = sum - (paper[i - 2][j - 1] + paper[i][j - 1]);
            sumArr[7] = sum - (paper[i - 2][j] + paper[i][j]);
        }
        
        let sumMax = Math.max(...sumArr);
        if(max < sumMax){
            max = sumMax;
        }
    }
}

sumArr = new Array(8).fill(0);

for(let i = 1; i < n; i++){
    let sum = 0;
    for(let j = 0; j < m; j++){
        sum += paper[i - 1][j] + paper[i][j];
        if(j >= 3){
            sum -= paper[i - 1][j - 3] + paper[i][j - 3];
        }
        if(j >= 2){
            sumArr[0] = sum - (paper[i][j - 1] + paper[i][j]);
            sumArr[1] = sum - (paper[i][j - 2] + paper[i][j - 1]);
            sumArr[2] = sum - (paper[i - 1][j - 1] + paper[i - 1][j]);
            sumArr[3] = sum - (paper[i - 1][j - 2] + paper[i - 1][j - 1]);
            sumArr[4] = sum - (paper[i][j - 2] + paper[i - 1][j]);
            sumArr[5] = sum - (paper[i - 1][j - 2] + paper[i][j]);
            sumArr[6] = sum - (paper[i - 1][j - 2] + paper[i - 1][j]);
            sumArr[7] = sum - (paper[i][j - 2] + paper[i][j]);
        }
        
        let sumMax = Math.max(...sumArr);
        if(max < sumMax){
            max = sumMax;
        }
    }
}
console.log(max);