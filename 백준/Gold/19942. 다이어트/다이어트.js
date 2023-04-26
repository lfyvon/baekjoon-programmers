const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(el => el.split(' ').map(Number));
const n = input[0][0];
const [mp, mf, ms, mv] = input[1];
const nutri = input.slice(2);
let idx = [];
let total = Infinity;
let result = [];

const dfs = (index) => {
    let p = f = s = v = c = 0;

    for(let i of idx){
        p += nutri[i][0];
        f += nutri[i][1];
        s += nutri[i][2];
        v += nutri[i][3];
        c += nutri[i][4];
    }

    if(p >= mp && f >= mf && s >= ms && v >= mv){
        if(c < total){
            total = c;
            result = idx.map(el => el + 1);
        }
    }
    for(let i = index; i < n; i++){
        if(!idx.includes(index)){
            idx.push(i);
            dfs(i + 1);
            idx.pop();
        }
    }
}

dfs(0);
if(total === Infinity) console.log(-1);
else{
    console.log(total);
    console.log(result.join(' '));
}