const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const per = input.slice(1).map(el => el.split(' ').map(Number));
let maxH = maxW = 0; 
let maxHIdx = -1, maxWIdx = -1;
for(let i = 0; i < per.length; i++){
    if(per[i][0] === 1 || per[i][0] === 2){
        if(maxH < per[i][1]){
            maxH = per[i][1];
            maxHIdx = i;
        }
        
    } else{
        if(maxW < per[i][1]){
            maxW = per[i][1];
            maxWIdx = i;
        }
    }
}
const bigArea = maxH * maxW;
const smallArea = (per[(maxHIdx + 3) % 6][1]) * (per[(maxWIdx + 3) % 6][1]);
console.log((bigArea - smallArea) * n);