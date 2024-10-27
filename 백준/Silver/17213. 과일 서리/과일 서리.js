const [N, M] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const com = (n, r) => {
    if(n === r || r === 0){
        return 1;
    }
    return com(n - 1, r - 1) + com(n - 1, r);
}
console.log(com(M - 1, M - N));
