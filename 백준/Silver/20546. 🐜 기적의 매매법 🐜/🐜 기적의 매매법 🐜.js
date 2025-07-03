const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const N = Number(input[0]); 
let J = [N, 0];
let S = [N, 0];
const arr = input[1].split(" ").map(Number);
const len = arr.length
let countP = 0;
let countM = 0;

for(let i = 0; i < len; i++){
    if(i > 0){
        if(arr[i - 1] > arr[i]){
            countM++;
            countP = 0;
        }
        if(arr[i - 1] < arr[i]){
            countP++;
            countM = 0;
        }
    }

    if(J[0] >= arr[i]){
        let num = Math.floor(J[0] / arr[i]);
        J[1] += num;
        J[0] -= num * arr[i];
    }

    if(countM >= 3){
        let num = Math.floor(S[0] / arr[i]);
        S[1] += num;
        S[0] -= num * arr[i];
    }    
    if(countP >= 3){
        S[0] += S[1] * arr[i];
        S[1] = 0;
    }
}
let jSum = arr[len - 1] * J[1] + J[0];
let sSum = arr[len - 1] * S[1] + S[0];
console.log(jSum === sSum ? "SAMESAME" : jSum > sSum ? "BNP" : "TIMING");