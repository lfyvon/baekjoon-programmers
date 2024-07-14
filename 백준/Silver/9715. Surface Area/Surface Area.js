const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.trim());
const T = Number(input[0]);
let i = 1;
let idx = 0;
let result = [];
while(idx < T){
    const [R, C] = input[i++].split(" ").map(Number);
    const matrix = input.slice(i, i + R).map(el => el.split("").map(Number));
    let count = 0;
    for(let j = 0; j < R; j++){
        for(let k = 0; k < C; k++){
            if(matrix[j][k] > 0) count += 2;
            if(k !== 0){
                count += Math.abs(matrix[j][k] - matrix[j][k - 1]);
            }
        }
        count += matrix[j][0] + matrix[j][C - 1];
    }
    for(let j = 0; j < C; j++){
        for(let k = 0; k < R; k++){
            if(k !== 0){
                count += Math.abs(matrix[k][j] - matrix[k - 1][j]);

            }
        }
        count += matrix[0][j] + matrix[R - 1][j];
    }
    result.push(count);
    i += R;
    idx++;
}
console.log(result.join("\n"));