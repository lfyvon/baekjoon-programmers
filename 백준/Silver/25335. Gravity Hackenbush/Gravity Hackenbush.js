const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.trim());
const [N, M] = input[0].split(" ").map(Number);
const arrM = input.slice(N + 1);
let R = B = G = 0;
for(let i = 0; i < M; i++){
    const [v, w, c] = arrM[i].split(" ");
    if(c === "R") R++;
    if(c === "B") B++;
    if(c === "G") G++;
}

if(G % 2 === 0){
    if(R > B){
        console.log("jhnah917");
    } else{
        console.log("jhnan917");
    }
} else {
    if(R >= B){
        console.log("jhnah917");
    } else{
        console.log("jhnan917");
    }
}