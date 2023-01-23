const [a, b, c, m] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let work = 0;
let fatigue = 0;
for(let i = 0; i < 24; i++){
    if(fatigue < m && fatigue + a <= m){
        fatigue += a;
        work += b;
    } else{
        fatigue -= c;
        if(fatigue < 0) fatigue = 0;
    }
}

console.log(work);