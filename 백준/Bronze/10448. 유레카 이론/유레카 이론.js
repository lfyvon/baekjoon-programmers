const [N, ...k] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const T = new Array(45).fill(0).map((v, i) => i * (i + 1) / 2);
const result = [];

const eureka = (num) => {
    for(let i = 1; i < 45; i++){
        for(let j = 1; j < 45; j++){
            for(let k = 1; k < 45; k++){
                const sum = T[i] + T[j] + T[k];
                if(sum === num) return 1;
            }
        }
    }
    return 0;
}

for(let i = 0; i < N; i++){
    result.push(eureka(k[i]));
}

console.log(result.join("\n"));