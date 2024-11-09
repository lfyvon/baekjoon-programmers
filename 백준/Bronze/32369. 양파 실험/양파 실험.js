const [N, A, B] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let good = bad = 1;

for(let i = 0; i < N; i++){
    good += A; 
    bad += B;
    if(bad > good) [good, bad] = [bad, good];
    if(bad === good) bad--;
}
console.log(good, bad);
