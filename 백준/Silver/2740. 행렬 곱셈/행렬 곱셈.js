const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(el => el.split(" ").map(Number));
const [N, M] = input[0];
const matrix1 = input.slice(1, N + 1);
const [_, K] = input[N + 1];
const matrix2 = input.slice(N + 2);
const malMatrix = Array.from(new Array(N), () => new Array(K).fill(0))
for(let i = 0; i < N; i++){
    for(let j = 0; j < K; j++){
        for(let k = 0; k < M; k++){
            malMatrix[i][j] += matrix1[i][k] * matrix2[k][j];
        }
    }
}
console.log(malMatrix.map(el => el.join(" ")).join("\n"));