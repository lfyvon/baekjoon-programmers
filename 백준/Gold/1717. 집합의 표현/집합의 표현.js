const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = ''
rl.on('line', function(line) {
    input += line+'\n';
}).on('close',function (){
    input = input.split('\n').map(el => el.split(" ").map(Number))
    const [n, m] = input[0];
    const parent = Array(n).fill().map((v, i)=> i);
    const result = [];

    const find = (x) => {
        if(parent[x] === x) return x;
        return parent[x] = find(parent[x]);
    }

    const merge = (x, y) => {
        x = find(x);
        y = find(y);
        if(x === y) return;
        parent[y] = x;
    }

    const isUnion = (x, y) => {
        x = find(x);
        y = find(y);
        return x === y;
    }

    for(let i = 1; i <= m; i++){
        const [op, a, b] = input[i];
        if(!op){
            merge(a, b);
        } else{
            result.push(isUnion(a, b) ? "YES" : "NO");
        }
    }
    console.log(result.join("\n"));
    
    process.exit();
});