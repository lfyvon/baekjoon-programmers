const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = [];
rl.on('line', function(line) {
    input.push(line.split(' ').map(Number));
}).on('close',function (){
    const [n, m] = input[0];
    const parent = Array(n + 1).fill().map((v, i)=> i);
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
            merge(Math.min(a, b), Math.max(a, b));
        } else{
            result.push(isUnion(a, b) ? "YES" : "NO");
        }
    }
    console.log(result.join("\n"));
    
    process.exit();
});