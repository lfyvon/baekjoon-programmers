const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number));
const [s1, s2] = input[0];
let test = true;
let sys = true;

for(let i = 1; i <= s1; i++){
    const [a, b] = input[i];
    if(a !== b){
        test = false;
        break;
    }
}

for(let i = s1 + 1; i <= s1 + s2; i++){
    const [a, b] = input[i];
    if(a !== b){
        sys = false;
        break;
    }
}

console.log(test && sys ? "Accepted" : test && !sys ? "Why Wrong!!!" : "Wrong Answer");