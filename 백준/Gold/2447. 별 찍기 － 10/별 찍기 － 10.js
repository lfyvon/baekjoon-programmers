const N = parseInt(require('fs').readFileSync('/dev/stdin').toString());
let result = "";

const recursion = (i, j) => {
    if(i % 3 === 1 && j % 3 === 1){
        result += " ";
    } else{
        if(Math.floor(i / 3) === 0 && Math.floor(j / 3) === 0){
            result += "*";
        } else{
            recursion(Math.floor(i / 3), Math.floor(j / 3));
        }
    }
}

for(let i = 0; i < N; i++){
    for(let j = 0; j < N; j++){
        recursion(i, j);
    }
    result += "\n";
}

console.log(result.trim());